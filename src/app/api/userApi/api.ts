/* eslint-disable no-empty */
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { message } from "antd";
import { userApi } from "./userApi";
import { baseQueryWithReAuth } from "../../slice/baseQuery";
import { setToken } from "../../features/userSlice";
import asyncWrapper from "../../utils/asyncWrapper";
import { ILoginResponse, IUser } from "../../../auth/types/loginTypes";

export const api = createApi({
  reducerPath: "MM_Api",
  baseQuery: baseQueryWithReAuth,
  // keepUnusedDataFor: expire.default,
  endpoints: (builder) => ({
    login: builder.mutation<
      ILoginResponse<IUser>,
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "admin/auth/login",
        method: "POST",
        body: body,
        // credentials: "include",
        headers:{
          'institute_id':'1'
        }
      }),
      onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
        asyncWrapper(async () => {
          const { data } = await queryFulfilled;

          dispatch(setToken(data.token!));
          await dispatch(userApi.endpoints.getMe.initiate());
          message.success("Successfully logged in!");
        });
      },
    }),
  }),
  tagTypes: ["training","Admin","Application"],
});

export const { useLoginMutation } = api;