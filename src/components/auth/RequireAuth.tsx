import React from "react";
import Userfront from "@userfront/react";
import Router from "next/router";

export default function RequireAuth({ children }) {
  React.useEffect(() => {
    if (!Userfront.tokens.accessToken) {
      Router.push("/sign-in");
    }
  }, []);

  return children;
}
