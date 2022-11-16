import { createSlice } from "@reduxjs/toolkit";

export const unitSlice = createSlice({
  name: "unit",
  initialState: {
    name: "Рекурсивная аналитика",
  },
  reducers: {
    setName: (state, action) => {
      const { name } = action.payload;
      state.name = name;
    },
  },
});

export const { setName } = unitSlice.actions;

export default unitSlice.reducer;
