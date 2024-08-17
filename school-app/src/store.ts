import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from "./features/header/headerSlice";
import AccordionReducer from "./features/accordion/accordionSlice";
import TestsReducer from "./features/tests/testsSlice";

export const store = configureStore({
  reducer: {
    header: HeaderReducer,
    accordion: AccordionReducer,
    tests: TestsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
