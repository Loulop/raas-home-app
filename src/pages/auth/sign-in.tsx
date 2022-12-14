import React, { SyntheticEvent } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Router, { useRouter } from "next/router";
// @ts-ignore
import Userfront from "@userfront/react";
//
import Navbar from "../../components/auth/navbar";
import Footer from "../../components/auth/footer";
import Input from "../../components/auth/input";
import usePreProcessor from "../../components/shared/hooks/usePreProcessor";

interface AuthState {
  method: string;
  email: string;
  password: string;
}

const SignIn: NextPage = () => {
  const [authState, setAuthState] = React.useState<AuthState>({
    method: "password",
    email: "",
    password: ""
  });
  const router = useRouter();

  const handleInputChange = React.useCallback(
    async (event: SyntheticEvent) => {
      event.preventDefault();
      const target = event.target as HTMLInputElement;
      await setAuthState({ ...authState, [target.name]: target.value });
    },
    [authState]
  );

  const handleFormSubmit = React.useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      Userfront.login({
        method: authState.method,
        email: authState.email,
        password: authState.password
      });
    },
    [authState]
  );

  const handlePreLoading = React.useCallback(async () => {
    if (!router.isReady) return false;

    const { next, uuid, token } = router.query;

    if (uuid && token) {
      try {
        // await Userfront.logout({ redirect: false });
        await Userfront.login({
          method: "link",
          uuid: uuid,
          token: token,
          redirect: false
        });
      } catch (e) {}
    }

    if (!Userfront.tokens.accessToken) return true;

    if (next) await Router.replace(encodeURI(next as string));
    await Router.replace("/apps");
    return false;
  }, [router.query, router.isReady]);

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
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                {/**/}
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-slate-500 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-slate-50 text-slate-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <div className="w-5 mr-1">
                        <img
                          src={"/images/google.svg"}
                          alt="..."
                          width={20}
                          height={20}
                        />
                      </div>
                      Google
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-slate-300" />
                </div>
                {/**/}
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-slate-400 text-center mb-3 font-bold">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <Input
                      type="email"
                      label="Email"
                      name="email"
                      onChange={handleInputChange}
                      value={authState.email}
                    />
                    <Input
                      type="password"
                      label="Password"
                      name="password"
                      onChange={handleInputChange}
                      value={authState.password}
                    />
                    <Input
                      type="button"
                      label="Sign In"
                      name="submit"
                      value="Sign In"
                    />
                  </form>
                </div>
                {/**/}
              </div>
              <div className="flex flex-wrap mt-6 relative">
                <div className="w-1/2">
                  <Link href="/auth/reset-password">
                    <a className="text-slate-200">
                      <small>Forgot password?</small>
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

export default SignIn;
