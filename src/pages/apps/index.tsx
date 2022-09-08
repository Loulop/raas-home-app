import React from "react";
import Router from "next/router";
import type { NextPageWithLayout } from "../_app";
//
import AppsLayout from "../../components/shared/layouts/appsLayout";
import usePreProcessor from "../../components/shared/hooks/usePreProcessor";

const AppsIndex: NextPageWithLayout = () => {
  const [test, setTest] = React.useState(false);
  // const handlePreLoading = React.useCallback(async () => {
  //   // 1. check userfront token
  //   if (!Userfront.tokens.accessToken) {
  //     await Router.replace(`/auth/sign-in?next=${Router.pathname}`);
  //   }
  //   // 2. check /me
  //   return true;
  // }, []);

  // const { isReady } = usePreProcessor({
  //   callback: handlePreLoading,
  //   autoRefresh: true
  // });

  // if (!isReady) return <div />;

  return <div>Ready</div>;
};

AppsIndex.getLayout = AppsLayout;
export default AppsIndex;
