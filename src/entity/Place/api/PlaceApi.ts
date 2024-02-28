import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_API_URL} from "../../../consts.ts";
import {IBaseErrorResponse} from "../../../shared/models/IBaseErrorResponse.ts";
import {IGetPlacesResponse} from "../models/responses/IGetPlacesResponse.ts";

const placeApi = createApi({
    reducerPath: "place",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }) as BaseQueryFn<
        string | FetchArgs,
        unknown,
        IBaseErrorResponse
    >,
    tagTypes: ["place"],
    endpoints: (build) => ({
        getAllPlaces: build.query<IGetPlacesResponse[], void>({
            query: () => ({
                url: "/tour-places",
                method: "GET",
            }),
            providesTags: ["place"]
        }),

        getPlaceById: build.query<IGetPlacesResponse, number>({
            query: (id) => ({
                url: `/tour-place/${id}`,
                method: "GET",
            }),
            providesTags: ["place"]
        })
    })
})

export const {useGetAllPlacesQuery} = placeApi