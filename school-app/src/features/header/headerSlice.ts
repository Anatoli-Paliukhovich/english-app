import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type HeaderState = {
  isBurger: boolean;
  isScrolled: boolean;
  links: Links[];
  color: string;
};
type Links = { title: string; href: string };
const initialState: HeaderState = {
  isBurger: false,
  isScrolled: false,
  links: [
    { title: "Grammar rules", href: "#rules" },
    { title: "Resources", href: "#materials" },
    { title: "Olympiads", href: "#olympiads" },
    { title: "Centralized examination", href: "#examination" },
  ],
  color: "red",
};
const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setBurger: (state, action: PayloadAction<boolean>) => {
      state.isBurger = action.payload;
    },
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setLinks: (state, action: PayloadAction<Links[]>) => {
      state.links = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export default headerSlice.reducer;
export const { setBurger, setScrolled, setLinks, setColor } =
  headerSlice.actions;
