import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Userfront from "@userfront/react";
//
import Navbar from "../components/auth/navbar";
import Footer from "../components/auth/footer";
import Input from "../components/auth/input";

const LoginForm = Userfront.build({
  toolId: "lrkrro"
});

interface AuthState {
  method: string;
  email: string;
  password: string;
  passwordVerify: string;
}

const SignIn: NextPage = () => {
  // Userfront.init("8b68zzdb");

  // const LoginForm = Userfront.build({
  //   toolId: "lrkrro"
  // });
  const [authState, setAuthState] = React.useState<AuthState>({});

  const handleInputChange = React.useCallback((event: SyntheticEvent) => {
    // event.preventDefault();
    // const target = event.target;
    // setState({ ... [target.name]: target.value });
  }, []);

  const handleInputSubmit = React.useCallback((event: SyntheticEvent) => {
    // event.preventDefault();
    // Userfront.signup({
    //   method: "password",
    //   email: authState.email,
    //   password: authState.password
    // });
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative w-full h-full py-40 min-h-screen">
        <div className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"></div>
        {/**/}
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                {/**/}
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <div className="w-5 mr-1">
                        <Image
                          src={"/images/google.svg"}
                          alt="..."
                          width={20}
                          height={20}
                        />
                      </div>
                      Google
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                {/**/}
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-center mb-3 font-bold">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form onSubmit={handleInputSubmit}>
                    <Input type="email" label="Email" />
                    <Input type="password" label="Password" />
                    <Input type="checkbox" label="Remember me" />
                    <Input type="button" label="Sign In" />
                  </form>
                </div>
                {/**/}
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
