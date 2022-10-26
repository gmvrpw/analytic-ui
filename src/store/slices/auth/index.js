import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    pictureSrc: "",
  },
  reducers: {},
});

export default authSlice.reducer;
