import React, { ReactElement } from "react";

interface PreProcessorParams {
  children: ReactElement<any, any>;
  callback: () => Promise<void>;
}

export default function PreProcessor(props: PreProcessorParams) {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      await props.callback();
      await setIsReady(true);
    })();
  }, [setIsReady]);

  if (isReady) return props.children;
  return <div />;
}
