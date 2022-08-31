import { MANAGEMENT_API_ENDPOINT } from "../globals";
import { getTokens } from "./tokens";

interface IAPIFetchParams {
  uri: string;
  options?: { [id: string]: any };
  secure?: boolean;
}

interface IAPIFetchResult {
  uri: string;
  ok: boolean;
  status: number;
  data?: { [id: string]: any };
}

interface IAPIErrorParams {
  uri: string;
  ok?: boolean;
  status: number;
  data?: { [id: string]: any };
}

class APIError extends Error {
  constructor({ uri, status, data }: IAPIErrorParams) {
    super("API Error");
    const result: IAPIFetchResult = {
      uri: uri,
      ok: false,
      status: status,
      data: data
    };
    this.message = JSON.stringify(result);
  }
}

export const APIFetcher = async ({
  uri,
  options,
  secure
}: IAPIFetchParams): Promise<IAPIFetchResult> => {
  options = options || {};
  let headers = Object.assign(options.headers || {}, {});
  let result;

  if (secure !== false) {
    let tokens = getTokens();
    if (!tokens.accessToken || !tokens.refreshToken) {
      result = {
        uri: uri,
        ok: false,
        status: 400,
        data: undefined
      };
      throw new APIError(result);
    }
    headers = Object.assign(headers, {
      Authorization: `Bearer ${tokens.accessToken}`
    });
  }

  const res = await fetch(
    `${MANAGEMENT_API_ENDPOINT}${uri}`,
    Object.assign(options, headers)
  );

  let data;
  try {
    data = await res.json();
  } catch (err) {
    result = { uri: uri, ok: false, status: 400, data: { message: err } };
    throw new APIError(result);
  }

  result = {
    uri: uri,
    ok: res.ok,
    status: res.status,
    data: data
  };

  if (!result.ok) throw new APIError(result);
  return result;
};

export default {
  refreshInterval: 3000,
  fetcher: APIFetcher
};
