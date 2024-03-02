import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ITourInitialState {
    from: string | null
    to: string | null
}

const initialState: ITourInitialState = {
    from: null,
    to: null
}

export const tourSlice = createSlice({
    name: "tourSlice",
    initialState,
    reducers: {
        setTourFrom(state, action: PayloadAction<string>) {
            state.from = action.payload
        },

        setTourTo(state, action: PayloadAction<string>) {
            state.to = action.payload
        },

        resetTourState() {
            return initialState
        }
    }
})

export const {setTourFrom, setTourTo, resetTourState} = tourSlice.actions