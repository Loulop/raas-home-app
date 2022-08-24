import React from "react";
import type { NextPage } from "next";
//
import RequireAuth from "../components/auth/requireAuth";

const SignOut: NextPage = () => {
  return (
    <>
      <RequireAuth mode="reset"><div /></RequireAuth>
    </>
  );
};

export default SignOut;
