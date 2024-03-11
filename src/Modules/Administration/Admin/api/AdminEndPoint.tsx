import Swal from "sweetalert2";
import { api } from "../../../../app/api/userApi/api";
import asyncWrapper from "../../../../app/utils/asyncWrapper";
import { HTTPResponse } from "../../../../app/utils/commonTypes";
import { IAdminList, IAdminParams } from "../types/AdminType";

export const AdminEndPoint = api.injectEndpoints({
  endpoints: (build) => ({
    getAdminAll: build.query<HTTPResponse<IAdminList[]>, IAdminParams>({
      query: (params) => {
        return {
          url: `/admin/administration/all-admin`,
          params,
          headers: {
            institute_id: "1",
          },
        };
      },
      providesTags: () => [{ type: "Admin", id: "list" }],
    }),
    createAdmin: build.mutation<HTTPResponse<IAdminList>, FormData>({
      query: (data) => ({
        url: "/admin/administration/create-admin",
        method: "POST",
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
            title: "Successfully Created",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      },
      invalidatesTags: () => [{ type: "training", id: "list" }],
    }),
    updateAdmin: build.mutation<
      unknown,
      { id: number | undefined; data: FormData }
    >({
      query: ({ id, data }) => ({
        url: `/admin/administration/admin-status/${id}`,
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
      invalidatesTags: () => [{ type: "Admin", id: "list" }],
    }),
  }),
});

export const {
  useGetAdminAllQuery,
  useCreateAdminMutation,
  useUpdateAdminMutation,
} = AdminEndPoint;
