import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    pictureSrc: "https://avatars.githubusercontent.com/u/111020155?v=4",
  },
  reducers: {},
});

export default authSlice.reducer;
