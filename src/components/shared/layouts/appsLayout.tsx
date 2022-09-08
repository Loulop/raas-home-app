import { ReactElement } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { SWRConfig } from "swr";
import Auth0Config from "../utils/auth0Config";
import SWRDefaultConfig from "../utils/swrConfig";

export default function AppsLayout(page: ReactElement) {
  return (
    <Auth0Provider {...Auth0Config}>
      <SWRConfig value={SWRDefaultConfig}>{page}</SWRConfig>
    </Auth0Provider>
  );
}
