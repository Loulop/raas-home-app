import React from "react";
import Link from "next/link";

export default function Footer(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-800"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <Link href="/">
                  <a className="text-white hover:text-blueGray-300 text-sm font-semibold py-1">
                    Loulop
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <Link href="/about-us">
                    <a className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3">
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://medium.com/@loulop"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://docs.loulop.io"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@loulop.io"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
