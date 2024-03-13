import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_API_URL} from "../../../consts.ts";
import {TourEntity} from "../../Tours/TourEntity.ts";
import {IBaseErrorResponse} from "../../../shared/models/IBaseErrorResponse.ts";

export const favoritesApi = createApi({
    reducerPath: "favorites",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }) as BaseQueryFn<
        string | FetchArgs,
        unknown,
        IBaseErrorResponse
    >,    tagTypes: ["favorites"],
    endpoints: (build) =>({
        getFavorites: build.query<TourEntity[], number>({
            query: (userId) => ({
                url: `/favorites/${userId}`,
                method: "GET",
            }),
            providesTags: (result) => result
                ? [
                    ...result.map(({id}) => ({type: "favorites" as const, id})),
                    {type: "favorites", id: "LIST"}
                ]
                : [ {type: "favorites", id: "LIST"}],
        }),

        addToFavorites: build.mutation<void, {userId: number, tourId: string}>({
            query: (requestData) => ({
                url: "/favorites",
                method: "POST",
                body: requestData
            })
        }),

        deleteFavoriteById: build.mutation<void, number>({
            query: (favoriteId: number) => ({
                url: `/favorites/${favoriteId}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "favorites", id: "LIST"}]
        })
    })
})

const {useAddToFavoritesMutation, useDeleteFavoriteByIdMutation, useGetFavoritesQuery} = favoritesApi