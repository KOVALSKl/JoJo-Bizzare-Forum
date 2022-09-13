import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        open: (state) => {
            state.value = true;
        },
        close: (state) => {
            state.value = false;
        }
    }
});

export const { open, close } = menuSlice.actions

export default menuSlice.reducer