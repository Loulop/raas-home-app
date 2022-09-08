import React from "react";

interface IPreProcessParams {
  callback: () => Promise<boolean> | boolean;
  autoRefresh?: boolean;
}

interface IPreProcessResult {
  execute: () => Promise<void>;
  isReady: boolean;
}

export default function usePreProcessor({
  callback,
  autoRefresh
}: IPreProcessParams): IPreProcessResult {
  const [isReady, setIsReady] = React.useState(false);

  const execute = React.useCallback(async () => {
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
