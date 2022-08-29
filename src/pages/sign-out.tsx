import React from "react";
import type { NextPage } from "next";
import Router from "next/router";
// @ts-ignore
import Userfront from "@userfront/react";
//
import usePreProcessor from "../components/shared/hooks/usePreProcessor";

const SignOut: NextPage = () => {
  const handlePreLoading = React.useCallback(async () => {
    await Userfront.logout();
    await Router.replace("/");
    return true;
  }, []);

  usePreProcessor({ callback: handlePreLoading, autoRefresh: true });

  return <div className="relative w-full h-full min-h-screen bg-slate-800" />;
};

export default SignOut;
