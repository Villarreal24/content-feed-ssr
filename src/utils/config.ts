// ================================================
//    THIS VALIDATION IS TO IDENTIFY IF IS IT
//    RUNNING IN PRODUCTION OF DEVELOP TO SET
//    THE BASE URL TO MAKE THE API CALLS.
// ================================================

const baseUrl: string | undefined =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEVELOP_URL
    : process.env.NEXT_PUBLIC_PRODUCTION_URL;

export default baseUrl;
