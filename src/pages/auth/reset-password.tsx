import React, { SyntheticEvent } from "react";
import type { NextPage } from "next";
import Router from "next/router";
import Link from "next/link";
// @ts-ignore
import Userfront from "@userfront/react";
//
import Input from "../../components/auth/input";
import usePreProcessor from "../../components/shared/hooks/usePreProcessor";
import Navbar from "../../components/auth/navbar";
import Footer from "../../components/auth/footer";

interface AuthState {
  email: string;
}

const ResetPassword: NextPage = () => {
  const [authState, setAuthState] = React.useState<AuthState>({
    email: ""
  });
  const handleFormSubmit = React.useCallback(
    async (event: SyntheticEvent) => {
      event.preventDefault();
      Userfront.sendResetLink(authState.email);
      // TODO improve redirection with messages..
      await Router.replace("/");
    },
    [authState]
  );

  const handleInputChange = React.useCallback(
    async (event: SyntheticEvent) => {
      event.preventDefault();
      const target = event.target as HTMLInputElement;
      await setAuthState({ ...authState, [target.name]: target.value });
    },
    [authState]
  );

  const handlePreLoading = React.useCallback(async () => {
    if (!Userfront.tokens.accessToken) return true;

    await Router.replace("/apps");
    return false;
  }, []);

  const { isReady } = usePreProcessor({
    callback: handlePreLoading,
    autoRefresh: true
  });

  if (!isReady)
    return <div className="relative w-full h-full min-h-screen bg-slate-800" />;

  return (
    <>
      <Navbar />
      <section className="relative w-full h-full py-40 min-h-screen">
        <div className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"></div>
        {/**/}
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-slate-500 text-sm font-bold">
                      Reset Password
                    </h6>
                  </div>
                  <hr className="mt-6 border-b-1 border-slate-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form onSubmit={handleFormSubmit}>
                    <Input
                      type="email"
                      label="Email"
                      name="email"
                      onChange={handleInputChange}
                      value={authState.email}
                    />
                    <Input
                      type="button"
                      label="Send Reset Link"
                      name="submit"
                      value="Send Reset Link"
                    />
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6 relative">
                <div className="w-1/2">
                  <small className="text-slate-400">
                    Already have an account?{" "}
                  </small>
                  <Link href="/auth/sign-in">
                    <a className="text-slate-200">
                      <small>Sign in</small>
                    </a>
                  </Link>
                </div>
                <div className="w-1/2 text-right">
                  <Link href="/auth/sign-up">
                    <a className="text-slate-200">
                      <small>Create new account</small>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**/}
        <Footer />
        {/**/}
      </section>
    </>
  );
};

export default ResetPassword;
