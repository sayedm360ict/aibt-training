/* eslint-disable prefer-const */
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query/react";
import { RootState } from "../store/store";
import { setLogout } from "../features/userSlice";

// const baseURL = "http://192.168.0.236:9003/api/v1"; //rahad
// const baseURL = "http://localhost:9003/api/v1";
export const baseURL = "http://192.168.0.244:1111/api/v1"; 
// export const baseURL = " https://training-server.skill360.world/api/v1"; //main

export const imageURL =
  "https://m360ict.s3.ap-south-1.amazonaws.com/training-storage/";
export const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  // credentials: 'include',
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as RootState).userSlice.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
      // headers.set('institute_id', '1')
    }
    return headers;
  },
});
export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // console.log(result);
  if (
    result?.error?.status === 401 ||
    result?.error?.status === "CUSTOM_ERROR" ||
    result?.error?.status === "FETCH_ERROR" ||
    result?.error?.status === "PARSING_ERROR" ||
    result?.error?.status === "TIMEOUT_ERROR"
  ) {
    api.dispatch(setLogout());
  }

  return result;
};