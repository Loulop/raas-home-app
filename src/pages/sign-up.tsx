import React from "react";
import type { NextPage } from "next";
import Router from "next/router";
// @ts-ignore
import Userfront from "@userfront/react";
//
import PreProcessor from "../components/shared/preProcessor";
import Navbar from "../components/auth/navbar";
import Footer from "../components/auth/footer";

const SignUp: NextPage = () => {
  const handlePreLoading = React.useCallback(async () => {
    if (Userfront.tokens.accessToken) {
      await Router.push("/apps");
    }
  }, []);

  return (
    <PreProcessor callback={handlePreLoading}>
      <>
        <Navbar />
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"></div>
          {/**/}

          {/**/}
          <Footer />
          {/**/}
        </section>
      </>
    </PreProcessor>
  );
};

export default SignUp;
