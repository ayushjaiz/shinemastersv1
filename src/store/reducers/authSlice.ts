import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    token: string | null;
}

const initialState: AuthState = {
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
        },
    }
})

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;