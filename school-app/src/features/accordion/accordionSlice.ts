import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { accordionData } from "../../data";

type AccordionData = {
  id: number;
  url: string;
  title: string;
  description: string;
  paragraf1: string;
  paragraf2: string;
  paragraf3: string;
  paragraf4: string;
  paragraf5: string;
};
type AccordionState = {
  data: AccordionData[];
  isChosen: string;
};

const initialState: AccordionState = {
  data: accordionData,
  isChosen: " ",
};
const accordionSlice = createSlice({
  name: "accordion",
  initialState,
  reducers: {
    setChosen: (state, action: PayloadAction<string>) => {
      if (state.isChosen === action.payload) {
        state.isChosen === "0";
      } else {
        state.isChosen = action.payload;
      }
    },
  },
});

export default accordionSlice.reducer;
export const { setChosen } = accordionSlice.actions;
