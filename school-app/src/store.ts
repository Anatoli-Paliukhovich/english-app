import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from "./features/header/headerSlice";
export const store = configureStore({
  reducer: {
    header: HeaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
