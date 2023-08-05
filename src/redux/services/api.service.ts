import { getToken } from "@/common/utils/token.utils";
import { APP_CONFIG } from "@/config/index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const prepareHeaders = (headers: Headers) => {
  const token = getToken(APP_CONFIG.ACCESS_TOKEN_KEY);
  if (token) {
    headers.set("authorization", `Token ${token}`);
  }
  return headers;
};

const baseQuery = fetchBaseQuery({
  baseUrl: APP_CONFIG.BASE_API_URL,
  prepareHeaders,
});

export const ApiService = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ["User"],
});

export default ApiService;
