import { configureStore } from "@reduxjs/toolkit";
import { authReducer,userReducer } from "./reducers";

const appStore = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>
 
export type AppDispatch = typeof appStore.dispatch

export default appStore;
