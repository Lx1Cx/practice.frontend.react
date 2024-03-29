import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUser {
    id: number
    login: string
    role: "user" | "admin"
}

type SliceState = {
    data: null | IUser
}

const initialState: SliceState = {
    data: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.data = action.payload
        }
    }
})

export const {setUser} = userSlice.actions