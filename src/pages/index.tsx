import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";
import useReco from "../components/shared/hooks/useReco";
import NewsLetter from "../components/home/newsLetter";

const Home: NextPage = () => {
  const recommendation = useReco();

  return (
    <>
      <Navbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <h2 className="font-semibold text-4xl text-slate-600">
              <span>
                Artificial Intelligence <br />
                Powered{" "}
              </span>
              <span className="brand-color text-red-600">
                Recommender <br />
                as a Service
              </span>
            </h2>
            {/**/}
            <p className="mt-4 text-lg leading-relaxed text-slate-500">
              <span>Deliver highly personalized </span>
              <span className="font-bold text-xl text-red-600">{`${recommendation} `}</span>
              <span>recommendations at scale.</span>
            </p>
            {/**/}
            <div className="mt-12 flex">
              <a
                href="/apps"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-2 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Get Started
              </a>
              <a
                href="mailto:support@loulop.io"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-2 mb-1 bg-slate-400 active:bg-slate-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Contact us for more info
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px -z-50 h-full">
          <Image src={"/images/logo_bg759.svg"} layout="fill" alt="..." />
        </div>
      </section>
      {/**/}
      <section className="py-2 bg-slate-600 relative">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-slate-600 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto md:pb-64 pb-16">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-32 mt-16">
              <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="far fa-file-alt text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Documentation
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-400">
                <span>
                  The Loulop recommendation engine can be applied to any domain
                  that has a catalog of items and is interacted by a large
                  number of users.
                </span>
                <br />
                <span>
                  Learn the basics of how to send and receive data from your
                  Apps and how to implement the APIs, SDKs, and Plugins to fit
                  your application needs.
                </span>
              </p>
              <a
                href="https://docs.loulop.io"
                target="_blank"
                rel="noreferrer"
                aria-label="documentation"
                className="mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Learn More
              </a>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative"></div>
          </div>
        </div>
      </section>
      {/**/}
      <section className="pb-16 bg-white relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        {/**/}
        <div className="container mx-auto">
          <div className="bg-slate-200 flex flex-wrap justify-center shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="text-center font-semibold text-3xl">
                Stay in the know
              </h3>
              <p className="text-center text-slate-500 text-lg leading-relaxed mt-4 mb-4">
                Join us the journey! the best way to keep in touch and to be
                informed of our latest and greatest updates!
              </p>
              <div className="sm:block flex flex-col mt-6 flex-auto px-4 lg:px-10 pt-0">
                {/**/}
                <NewsLetter />
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      {/**/}
      <Footer />
    </>
  );
};

export default Home;
