import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_API_URL} from "../../../consts.ts";
import {IBaseErrorResponse} from "../../../shared/models/IBaseErrorResponse.ts";
import {IGetPlacesResponse} from "../models/responses/IGetPlacesResponse.ts";
import {ICreatePlaceRequest} from "../models/requests/ICreatePlaceRequest.ts";
import {ICreatePlaceResponse} from "../models/responses/ICreatePlaceResponse.ts";
import {IUpdatePlaceResponse} from "../models/responses/IUpdatePlaceResponse.ts";
import {IUpdatePlaceRequest} from "../models/requests/IUpdatePlaceRequest.ts";
import {TokenService} from "../../../shared/services/TokenService.ts";

export const placeApi = createApi({
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
            providesTags: (result) => result
                ? [
                    ...result.map(({id}) => ({type: "place" as const, id})),
                    {type: "place", id: "LIST"}
                ]
                : [ {type: "place", id: "LIST"}],
        }),

        getPlaceById: build.query<IGetPlacesResponse, number>({
            query: (id) => ({
                url: `/tour-places/${id}`,
                method: "GET",
            }),
            providesTags: (_, __, id) => [{ type: 'place' as const, id }],
        }),

        createPlace: build.mutation<ICreatePlaceResponse, ICreatePlaceRequest>({
            query: (body) => ({
                url: "/tour-places",
                method: "POST",
                body,
                headers: {
                    Authorization: `Bearer ${TokenService.getAccessToken()}`
                }
            }),
            invalidatesTags:  [{ type: 'place', id: 'LIST' }]
        }),

        updatePlaceById: build.mutation<IUpdatePlaceResponse, IUpdatePlaceRequest>({
            query: ({id, ...body}) => ({
                url: `/tour-place/${id}`,
                method: "PUT",
                body,
                headers: {
                    Authorization: `Bearer ${TokenService.getAccessToken()}`
                }
            })
        }),

        deletePlaceById: build.mutation<void, string>({
            query: (id) => ({
                url: `/tour-places/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${TokenService.getAccessToken()}`
                }
            }),
            invalidatesTags: [{type: "place", id: "LIST"}]
        })
    })
})

export const {useGetAllPlacesQuery, useDeletePlaceByIdMutation, useCreatePlaceMutation, useGetPlaceByIdQuery, useUpdatePlaceByIdMutation} = placeApi