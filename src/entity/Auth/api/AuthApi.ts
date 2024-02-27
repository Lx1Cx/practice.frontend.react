import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IAuthorizationResponse} from "../models/responses/IAuthorizationResponse.ts";
import {IAuthorizationRequest} from "../models/requests/IAuthorizationRequest.ts";
import {IBaseErrorResponse} from "../../../shared/models/IBaseErrorResponse.ts";
import {IRegistrationRequest} from "../models/requests/IRegistrationRequest.ts";
import {BASE_API_URL} from "../../../consts.ts";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }) as BaseQueryFn<
        string | FetchArgs,
        unknown,
        IBaseErrorResponse
    >,
    endpoints: (build) => ({
        authorization: build.mutation<IAuthorizationResponse, IAuthorizationRequest>({
            query: (body) => ({
                url: "/users/login",
                method: "POST",
                body
            })
        }),
        registration: build.mutation<void, IRegistrationRequest>({
            query: (body) => ({
                url: "/users/registration",
                method: "POST",
                body
            })
        })
    })
})

export const {useRegistrationMutation, useAuthorizationMutation} = authApi