import React, { SyntheticEvent } from "react";

interface InputParams {
  type: string;
  label: string;
  name: string;
  value: string | boolean;
  onChange?: (event: SyntheticEvent) => Promise<void>;
}

export default function Input(props: InputParams) {
  switch (props.type) {
    case "checkbox":
      return (
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
              type="checkbox"
              name={props.name}
              checked={!!props.value}
              onChange={props.onChange}
            />
            <span className="ml-2 text-sm font-semibold text-slate-600">
              {props.label}
            </span>
          </label>
        </div>
      );
    case "button":
      return (
        <div className="text-center mt-6">
          <button
            className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="submit"
          >
            {props.label}
          </button>
        </div>
      );
    default:
      return (
        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-slate-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            {props.label}
          </label>
          <input
            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            type={props.type}
            name={props.name}
            value={`${props.value}`}
            onChange={props.onChange}
            placeholder={props.label}
          />
        </div>
      );
  }
}
