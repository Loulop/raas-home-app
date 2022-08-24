import React from "react";
import type { NextPage } from "next";
import Router from "next/router";
// @ts-ignore
import Userfront from "@userfront/react";
//
import PreProcessor from "../components/shared/preProcessor";

const SignOut: NextPage = () => {
  const handlePreLoading = React.useCallback(async () => {
    await Userfront.logout();
    await Router.replace("/");
  }, []);

  return (
    <>
      <PreProcessor callback={handlePreLoading}>
        <div />
      </PreProcessor>
    </>
  );
};

export default SignOut;
