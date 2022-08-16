import type { NextPage } from "next";
import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";
import Image from "next/image";

const AboutUs: NextPage = () => {
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
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div
                    className="relative flex shadow-xl rounded-full justify-center items-center border-none absolute -m-16 bg-white"
                    style={{ width: 150, height: 150 }}
                  >
                    <Image
                      alt="..."
                      src={"/images/logo-named-2.png"}
                      width={90}
                      height={90}
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mt-32">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-700 mb-2">
                  Loulop.io
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-slate-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-400"></i>{" "}
                  Seoul, South Korea
                </div>
              </div>
              <div className="mt-10 pt-10 pb-20 border-t border-slate-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-slate-700">
                      Our Mission is to bring the highest quality recommender as
                      a service to our clients through a simple dashboard and
                      API. We aspire to provide an AI-powered recommendation
                      service that scales up to millions of users and products.
                      Do you manage a small digital agency that runs several
                      e-shops? Or do you operate a CMS product used by thousands
                      of customers?
                      <br />
                      Join us on the journey, and give customers more of what
                      they love :)
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

export default AboutUs;
