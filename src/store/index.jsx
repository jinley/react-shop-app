import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";

export const store = configureStore({
    reducer: {
        // userSlice,
        user: userReducer,
    },
});
