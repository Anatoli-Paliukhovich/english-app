import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from "./features/header/headerSlice";
import AccordionReducer from "./features/accordion/accordionSlice";
import TestsReducer from "./features/tests/testsSlice";
import SearchReducer from "./features/search/searchSlice";
import MaterialsReducer from "./features/material/materialSlice";
import OlympiadsReducer from "./features/olympiad/olympiadSlice";
export const store = configureStore({
  reducer: {
    header: HeaderReducer,
    accordion: AccordionReducer,
    tests: TestsReducer,
    search: SearchReducer,
    materials: MaterialsReducer,
    olympiads: OlympiadsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
