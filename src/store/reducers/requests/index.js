import { createReducer } from "@reduxjs/toolkit";
import requestsReducers from "./requestsReducer";

const initialState = {
  countOfTriggered: null,
};

const requestsReducer = createReducer(initialState, {
  ...requestsReducers,
});
export default requestsReducer;
