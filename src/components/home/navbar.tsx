import React from "react";
import Link from "next/link";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);

  return (
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a
              href="#"
              className="text-slate-700 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase flex"
            >
              <div className="inline mx-2 flex">
                <img
                  className=""
                  src={"/images/logo192.png"}
                  alt="logo"
                  width={22}
                  height={22}
                />
              </div>
              Loulop
              <small className="mx-1 lowercase font-medium text-slate-400">
                alpha
              </small>
            </a>
          </Link>
          {/**/}
          <button
            className="cursor-pointer text-slate-700 text-xl leading-none px-3 py-1 border border-solid border-gray rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/**/}
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
            (navbarOpen ? " block" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                target="_blank"
                rel="noreferrer"
                href="https://docs.loulop.io"
              >
                <i className="text-slate-400 text-lg leading-lg mr-2 far fa-file-alt" />{" "}
                Docs
              </a>
            </li>
          </ul>
          {/**/}
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://linkedin.com/company/loulop"
                rel="noreferrer"
                target="_blank"
              >
                <i className="text-slate-400 fab fa-linkedin text-lg leading-lg " />
                <span className="lg:hidden inline-block ml-2">Visit</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://twitter.com/louloper"
                rel="noreferrer"
                target="_blank"
              >
                <i className="text-slate-400 fab fa-twitter text-lg leading-lg " />
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://github.com/loulop"
                rel="noreferrer"
                target="_blank"
              >
                <i className="text-slate-400 fab fa-github text-lg leading-lg " />
                <span className="lg:hidden inline-block ml-2">Star</span>
              </a>
            </li>

            <li className="flex items-center">
              <Link href="/apps">
                <a className="bg-slate-700 text-white active:bg-slate-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 lg:mt-0 my-3 ease-linear transition-all duration-150">
                  My Apps
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
