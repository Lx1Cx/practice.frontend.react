import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_API_URL} from "../../../consts.ts";
import {IBaseErrorResponse} from "../../../shared/models/IBaseErrorResponse.ts";
import {TourEntity} from "../TourEntity.ts";
import {ICreateTourRequest} from "../models/requests/ICreateTourRequest.ts";

export const tourApi = createApi({
    reducerPath: "tour",
    baseQuery: fetchBaseQuery({baseUrl: BASE_API_URL}) as BaseQueryFn<
        string | FetchArgs,
        unknown,
        IBaseErrorResponse
    >,
    tagTypes: ["tours"],
    endpoints: (build) => ({
        getAllTours: build.query<TourEntity[], void>({
            query: () => ({
                url: "tours",
                method: "GET"
            }),
            providesTags: (result) => result
                ? [
                    ...result.map(({id}) => ({type: "tours" as const, id})),
                    {type: "tours", id: "LIST"}
                ]
                : [ {type: "tours", id: "LIST"}],
        }),

        getTourById: build.query<TourEntity, string>({
            query: (id) => ({
                url: `tours/${id}`,
                method: "GET"
            }),
            providesTags: (_, __, id) => [{ type: 'tours' as const, id }],
        }),

        createTour: build.mutation<void, ICreateTourRequest>({
            query: (body) => ({
                url: "tours",
                method: "POST",
                body
            }),
            invalidatesTags:  [{ type: 'tours', id: 'LIST' }]
        }),
        deleteTourById: build.mutation<void, string>({
            query: (id) => ({
                url: `tours/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const {useGetAllToursQuery, useGetTourByIdQuery, useDeleteTourByIdMutation, useCreateTourMutation} = tourApi