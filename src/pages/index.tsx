import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";

const Home: NextPage = () => {
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
              <span className="brand-color">
                Recommender <br />
                as a Service
              </span>
            </h2>
            {/**/}
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              <span>Deliver highly personalized </span>
              <span className="font-bold text-xl">"VARIABLE" </span>
              <span>recommendations at scale.</span>
            </p>
            {/**/}
            <div className="mt-12">
              <a
                href="/apps"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-2 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                target="_blank"
              >
                Get Started
              </a>
              <a
                href="/contact-us"
                target="_blank"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-2 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Contact us for more info
              </a>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/images/logo_bg759.svg"
          alt="..."
        />
      </section>
      <Footer />
    </>
  );
};

export default Home;
