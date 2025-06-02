import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from "./features/header/headerSlice";
import AccordionReducer from "./features/accordion/accordionSlice";
import TestsReducer from "./features/tests/testsSlice";
import SearchReducer from "./features/search/searchSlice";
import MaterialsReducer from "./features/material/materialSlice";
import OlympiadsReducer from "./features/olympiad/olympiadSlice";
import RtReducer from "./features/rt/rtSlice";
import CeReducer from "./features/ce/ceSlice";
import SpecificationReducer from "./features/specification/specificationSlice";
export const store = configureStore({
  reducer: {
    header: HeaderReducer,
    accordion: AccordionReducer,
    tests: TestsReducer,
    search: SearchReducer,
    materials: MaterialsReducer,
    olympiads: OlympiadsReducer,
    rt: RtReducer,
    ce: CeReducer,
    specification: SpecificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
