import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type initialStateFileSliceType = {
    images: string[]
}

const initialState: initialStateFileSliceType = {
    images: []
}

export const fileSlice = createSlice({
    name: "fileSlice",
    initialState,
    reducers: {
        addImage(state, action: PayloadAction<string>) {
            state.images.push(action.payload)
        },
        deleteImage(state, action: PayloadAction<string>) {
            state.images = state.images.filter(image => image !== action.payload)
        }
    }
})

export const {addImage, deleteImage} = fileSlice.actions