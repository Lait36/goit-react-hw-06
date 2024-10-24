import { createSlice } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.filter.name;

const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {setName} = slice.actions;
export default slice.reducer;
