import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-white pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold mb-2">
                {"Let's keep in touch!"}
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-slate-600">
                Find us on any of these platforms, we respond in 1-2 business
                days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                <a
                  className="flex bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  aria-label="Twitter"
                  href="https://twitter.com/louloper"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="flex bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/loulop"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  className="flex bg-white text-slate-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  href="https://www.github.com/loulop"
                  aria-label="Github"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/about-us">
                        <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        target="_blank"
                        rel="noreferrer"
                        href="https://medium.com/@loulop"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        href="/docs"
                      >
                        Docs
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/loulop"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        href="mailto:support@loulop.io"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/tos-and-conditions">
                        <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">
                          Terms & Conditions
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-slate-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Loulop.io
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
