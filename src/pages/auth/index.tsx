import React from "react";
import type { NextPage } from "next";
import Router from "next/router";

const AuthIndex: NextPage = () => {
  React.useEffect(() => {
    (async () => await Router.replace("/auth/sign-in"))();
  }, []);
  return <div />;
};

export default AuthIndex;
