import React, { ReactElement } from "react";
import Router from "next/router";
// @ts-ignore
import Userfront from "@userfront/react";

interface RequireAuthParams {
  children: ReactElement<any, any>;
  mode: string;
}

export default function RequireAuth({ children, mode }: RequireAuthParams) {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      switch (mode) {
        case "authenticated":
          if (!Userfront.tokens.accessToken) {
            await Router.push("/sign-in");
          }
          break;
        case "anonymous":
          if (Userfront.tokens.accessToken) {
            await Router.push("/apps");
          }
          break;
        case "reset":
          Userfront.logout();
          await Router.replace("/");
      }
      await setIsReady(true);
    })();
  }, [setIsReady, mode]);

  if (isReady) return children;
  return <div />;
}
