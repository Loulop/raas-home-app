import React from "react";
import type { NextPage } from "next";
import Navbar from "../components/auth/navbar";
import Footer from "../components/auth/footer";
// @ts-ignore
import Userfront from "@userfront/react";

const SignupForm = Userfront.build({
  toolId: "lrkrro"
});

const SignUp: NextPage = () => {
  // Userfront.init("8b68zzdb");

  // const LoginForm = Userfront.build({
  //   toolId: "lrkrro"
  // });

  return (
    <>
      <Navbar />
      <section className="relative w-full h-full py-40 min-h-screen">
        <div className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"></div>
        {/**/}
        <SignupForm />
        {/**/}
        <Footer />
        {/**/}
      </section>
    </>
  );
};

export default SignUp;
