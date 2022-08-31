import Cookies from "js-cookie";
import type { CookieAttributes } from "js-cookie";

interface ISetTokensParams {
  accessToken: string;
  refreshToken: string;
}

interface IGetTokenResult {
  accessToken?: string;
  refreshToken?: string;
}

const DEFAULT_COOKIE_OPTIONS: CookieAttributes = {
  secure: true,
  sameSite: "Strict",
  expires: 7,
  path: "/",
  domain: ""
};

export function getTokens(): IGetTokenResult {
  return {
    accessToken: Cookies.get("accessToken"),
    refreshToken: Cookies.get("refreshToken")
  };
}

export function setTokens(values: ISetTokensParams) {
  Cookies.set("loulop.accessToken", values.accessToken, DEFAULT_COOKIE_OPTIONS);
  Cookies.set(
    "loulop.refreshToken",
    values.refreshToken,
    DEFAULT_COOKIE_OPTIONS
  );
}

export function removeTokens() {
  Cookies.remove("loulop.accessToken", DEFAULT_COOKIE_OPTIONS);
  Cookies.remove("loulop.refreshToken", DEFAULT_COOKIE_OPTIONS);
}
