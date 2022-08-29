import React from "react";

interface IPreProcessParams {
  callback: () => Promise<boolean> | boolean;
  autoRefresh?: boolean;
}

export default function usePreProcessor({
  callback,
  autoRefresh
}: IPreProcessParams) {
  const [isReady, setIsReady] = React.useState(false);

  const execute = React.useCallback(async () => {
    console.log(callback);
    const result = await callback();
    await setIsReady(!!result);
  }, [callback]);

  React.useEffect(() => {
    (async () => {
      if (autoRefresh) await execute();
    })();
  }, [execute, autoRefresh]);

  return { execute, isReady };
}
