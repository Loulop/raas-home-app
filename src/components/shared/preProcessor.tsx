import React, { ReactElement } from "react";

interface PreProcessorParams {
  children: ReactElement<any, any>;
  callback: () => Promise<boolean>;
}

export default function PreProcessor({
  children,
  callback
}: PreProcessorParams) {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      if (await callback()) await setIsReady(true);
    })();
  }, [setIsReady, callback]);

  if (isReady) return children;
  return <div />;
}
