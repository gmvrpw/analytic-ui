import { createReducer } from "@reduxjs/toolkit";
import unitsReducers from "./unitsReducers";

const initialState = {
  units: [],
  isLoading: false,
  isCreating: false,
  errors: null,
};

const unitsReducer = createReducer(initialState, {
  ...unitsReducers,
});
export default unitsReducer;
