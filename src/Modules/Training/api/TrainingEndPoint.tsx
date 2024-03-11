import Swal from "sweetalert2";
import { api } from "../../../app/api/userApi/api";
import asyncWrapper from "../../../app/utils/asyncWrapper";
import { HTTPResponse } from "../../../app/utils/commonTypes";
import {
  ICreateTraining,
  ITrainingDetails,
  ITrainingList,
  ITrainingParams,
} from "../types/TrainingType";

export const trainingEndPoint = api.injectEndpoints({
  endpoints: (build) => ({
    getTrainingAll: build.query<HTTPResponse<ITrainingList[]>, ITrainingParams>(
      {
        query: (params) => {
          return {
            url: `/admin/training`,
            params,
            headers: {
              institute_id: "1",
            },
          };
        },
        providesTags: () => [{ type: "training", id: "list" }],
      }
    ),
    //Single Training
    getSingleTraining: build.query<HTTPResponse<ITrainingDetails>, number>({
      query: (id) => ({
        url: `/admin/training/${id}`,
        headers: {
          institute_id: "1",
        },
      }),
      providesTags: () => [{ type: "training", id: "list" }],
    }),
    createTraining: build.mutation<HTTPResponse<ICreateTraining>, FormData>({
      query: (data) => ({
        url: "/admin/training",
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
    updateTraining: build.mutation<
      unknown,
      { id: number | undefined; data: FormData }
    >({
      query: ({ id, data }) => ({
        url: `/admin/training/${id}`,
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
      invalidatesTags: () => [{ type: "training", id: "list" }],
    }),
  }),
});

export const {
  useGetTrainingAllQuery,
  useGetSingleTrainingQuery,
  useCreateTrainingMutation,
  useUpdateTrainingMutation,
} = trainingEndPoint;
