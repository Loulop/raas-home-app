import React from "react";
import type { NextPage } from "next";
import Navbar from "../components/auth/navbar";
import Footer from "../components/auth/footer";
// @ts-ignore
import Userfront from "@userfront/react";

const PasswordResetForm = Userfront.build({
  toolId: "lrkrro"
});

const ResetPassword: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-full py-40 min-h-screen">
        <div className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"></div>
        {/**/}
        <PasswordResetForm />
        {/**/}
        <Footer />
        {/**/}
      </section>
    </>
  );
};

export default ResetPassword;
