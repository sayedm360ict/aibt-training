import Swal from "sweetalert2";
import { api } from "../../../app/api/userApi/api";
import asyncWrapper from "../../../app/utils/asyncWrapper";
import { HTTPResponse } from "../../../app/utils/commonTypes";
import {
  IApplicationDetails,
  IApplicationList,
  IApplicationParams,
} from "../types/ApplicationType";

export const ApplicationEndpoint = api.injectEndpoints({
  endpoints: (build) => ({
    getApplicationAll: build.query<
      HTTPResponse<IApplicationList[]>,
      IApplicationParams
    >({
      query: (params) => {
        return {
          url: `/admin/training/application`,
          params,
          headers: {
            institute_id: "1",
          },
        };
      },
      providesTags: () => [{ type: "Application", id: "list" }],
    }),
    //Single Training
    getSingleApplication: build.query<
      HTTPResponse<IApplicationDetails>,
      number
    >({
      query: (id) => ({
        url: `/admin/training/application/${id}`,
        headers: {
          institute_id: "1",
        },
      }),
      providesTags: () => [{ type: "Application", id: "list" }],
    }),

    updateApplication: build.mutation<
      unknown,
      { id: number | undefined; data: FormData }
    >({
      query: ({ id, data }) => ({
        url: `/admin/training/application/${id}`,
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
      invalidatesTags: () => [{ type: "Application", id: "list" }],
    }),
  }),
});

export const {
  useGetApplicationAllQuery,
  useGetSingleApplicationQuery,
  useUpdateApplicationMutation,
} = ApplicationEndpoint;
