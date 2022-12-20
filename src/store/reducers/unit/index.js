import { createReducer } from "@reduxjs/toolkit";
import unitReducers from "./unitReducers";

const initialState = {
  name: "Рекурсивная аналитика",
  containers: [],
};

const unitReducer = createReducer(initialState, {
  ...unitReducers,
});
export default unitReducer;
