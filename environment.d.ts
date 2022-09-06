declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MANAGEMENT_API_ENDPOINT: string;
      AUTH0_DOMAIN: string;
      AUTH0_CLIENT_ID: string;
      AUTH0_REDIRECT_URI: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
