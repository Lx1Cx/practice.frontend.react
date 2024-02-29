import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_API_URL} from "../../../consts.ts";
import {IBaseErrorResponse} from "../../../shared/models/IBaseErrorResponse.ts";
import {IUploadFileResponse} from "../models/response/IUploadFileResponse.ts";

export const fileApi = createApi({
    reducerPath: "file",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }) as BaseQueryFn<
        string | FetchArgs,
        unknown,
        IBaseErrorResponse
    >,
    endpoints: build => ({
        uploadFile: build.mutation<IUploadFileResponse, FormData>({
            query: body => ({
                url: "/files/upload",
                method: "POST",
                body,
            })
        })
    })
})

export const {useUploadFileMutation} = fileApi