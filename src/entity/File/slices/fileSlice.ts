import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type initialStateFileSliceType = {
    images: {
        id: string
        name: string
    }[]
}

const initialState: initialStateFileSliceType = {
    images: []
}

export const fileSlice = createSlice({
    name: "fileSlice",
    initialState,
    reducers: {

        addImage(state, action: PayloadAction<{id: string, name: string}>) {
            state.images.push(action.payload)
        },

        deleteImage(state, action: PayloadAction<string>) {
            state.images = state.images.filter(image => image.id !== action.payload)
        },

        resetImages(state) {
            state.images = initialState.images
        }
    }
})

export const {addImage, deleteImage, resetImages} = fileSlice.actions