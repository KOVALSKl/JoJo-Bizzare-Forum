import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, payload) => {
            console.log(payload)
            state.value = payload
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer