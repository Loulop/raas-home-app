import type { NextPage } from "next";
import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Navbar />
      {/**/}
      <section className="relative block h-400-px">
        <div className="absolute top-0 w-full h-full bg-center bg-slate-600">
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        {/**/}
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      {/**/}
      <section className="relative py-16 bg-slate-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-16">
              <div className="mt-16">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-700 mb-2">
                  Privacy Policy
                </h3>
              </div>
              <div className="mt-10 pt-10 pb-20 border-t border-slate-200">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-9/12">
                    <p className="mb-4 text-lg leading-relaxed text-slate-700">
                      COMING SOON
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**/}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
