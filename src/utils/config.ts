const baseUrl: string | undefined =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEVELOP_URL
    : process.env.NEXT_PUBLIC_PRODUCTION_URL;

export default baseUrl;
