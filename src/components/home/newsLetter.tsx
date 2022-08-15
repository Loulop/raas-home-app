import React from "react";

export default function NewsLetter() {
  return (
    <form action="https://github.us20.list-manage.com/subscribe/post">
      <input type="hidden" name="u" value="892ee37f2445ce1319bdde5d6" />
      <input type="hidden" name="id" value="1a577e4925" />
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-slate-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Name
        </label>
        <input
          type="text"
          name="MERGE1"
          id="MERGE1"
          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          placeholder="Name"
        />
      </div>

      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-slate-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Email
        </label>
        <input
          type="email"
          name="MERGE0"
          id="MERGE0"
          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          placeholder="Email"
        />
      </div>
      <div className="text-center mt-6">
        <button
          className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
