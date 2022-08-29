import React from "react";
import type { NextPage } from "next";
import Router from "next/router";
// @ts-ignore
import Userfront from "@userfront/react";
//
import usePreProcessor from "../../components/shared/hooks/usePreProcessor";

const AppsIndex: NextPage = () => {
  const [test, setTest] = React.useState(false);
  const handlePreLoading = React.useCallback(async () => {
    // 1. check userfront token
    if (!Userfront.tokens.accessToken) {
      await Router.replace(`/sign-in?next=${Router.pathname}`);
    }
    // 2. check /me
    return true;
  }, []);

  const { isReady } = usePreProcessor({
    callback: handlePreLoading,
    autoRefresh: true
  });

  if (!isReady) return <div />;

  return <div>Ready</div>;
};

export default AppsIndex;
