import React from "react";
import type { NextPage } from "next";
import Router from "next/router";
import Image from "next/image";
// @ts-ignore
import Userfront from "@userfront/react";
//
import Input from "../components/auth/input";
import PreProcessor from "../components/shared/preProcessor";
import Navbar from "../components/auth/navbar";
import Footer from "../components/auth/footer";

interface AuthState {
  email: string;
}

const ChangePassword: NextPage = () => {
  const [authState, setAuthState] = React.useState<AuthState>({
    password: "",
    verify_password: ""
  });

  const handlePreLoading = React.useCallback(async () => {
    if (Userfront.tokens.accessToken) {
      await Router.push("/apps");
    }
  }, []);

  const handleFormSubmit = React.useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      Userfront.resetPassword({
        password: authState.password
      });
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

  return (
    <PreProcessor callback={handlePreLoading}>
      <>
        <Navbar />
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"></div>
          {/**/}
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-blueGray-500 text-sm font-bold">
                        Change Password
                      </h6>
                    </div>
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={handleFormSubmit}>
                      <Input
                        type="password"
                        label="Password"
                        name="password"
                        onChange={handleInputChange}
                        value={authState.password}
                      />
                      <Input
                        type="password"
                        label="Confirm Password"
                        name="verify_password"
                        onChange={handleInputChange}
                        value={authState.verify_password}
                      />

                      <Input
                        type="button"
                        label="Change Password"
                        name="submit"
                        value="Change Password"
                      />
                    </form>
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
    </PreProcessor>
  );
};

export default ChangePassword;
