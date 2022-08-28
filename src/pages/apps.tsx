import React from "react";
import type { NextPage } from "next";
import Router from "next/router";
// @ts-ignore
import Userfront from "@userfront/react";
//
import PreProcessor from "../components/shared/preProcessor";

const Apps: NextPage = () => {
  const handlePreLoading = React.useCallback(async () => {
    if (!Userfront.tokens.accessToken) {
      await Router.replace("/sign-in");
      // TODO: add next=url querystring.
    }
    return true;
  }, []);

  return (
    <PreProcessor callback={handlePreLoading}>
      <div>Test</div>
    </PreProcessor>
  );
};

export default Apps;
