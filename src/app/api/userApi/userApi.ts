/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReAuth } from "../../slice/baseQuery";
import { setUser } from "../../features/userSlice";
import notification from "../../../components/utils/Notification";
import { ILoginResponse, IUpdatePassword, IUser } from "../../../auth/types/loginTypes";
import asyncWrapper from "../../utils/asyncWrapper";
import Swal from "sweetalert2";

export const userApi = createApi({
  baseQuery: baseQueryWithReAuth,
  reducerPath: "userApi",
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query<ILoginResponse<IUser>, void>({
      query() {
        return {
          url: "/admin/profile",
          // credentials: 'include',
          headers:{
            institute_id:'1'
          }
        };
      },
      transformErrorResponse: (response) => {
        if (response.status === 400 && response.data) {
          const { message: err } = response.data as {
            message: string;
            success: boolean;
          };
          //   message.error(`${err}`);
          notification("error", err);
        } else {
          // message.error('User name or password is incorrect!');
        }
      },
      //   result.data.data,
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          if (data?.data) {
            dispatch(setUser(data.data));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),

    updatePassword: builder.mutation<void, IUpdatePassword>({
      query: (body) => ({
        url: `/admin/profile/change-password`,
        method: "POST",
        body: body,
        headers:{
          institute_id:'1'
        }
      }),
      onQueryStarted: (_arg, { queryFulfilled }) => {
        asyncWrapper(async () => {
          await queryFulfilled;
          notification("success", "Successfully update password");
        });
      },
    }),

    updateProfile: builder.mutation<
    unknown,
    { data: FormData }
  >({
    query: ({data }) => ({
      url: `/admin/profile`,
      method: "PATCH",

      body: data,
      headers: {
        institute_id: "1",
      },
    }),
    onQueryStarted: (_arg, { queryFulfilled }) => {
      FormData;
      asyncWrapper(async () => {
        await queryFulfilled;
        Swal.fire({
          title: "Successfully Updated",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    },
   
  }),

    
  }),
});

export const { useGetMeQuery,useUpdatePasswordMutation,useUpdateProfileMutation } = userApi;
