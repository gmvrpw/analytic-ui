import { createReducer } from "@reduxjs/toolkit";
import dataReducers from "./dataReducers";

const initialState = {
  data: [],
  countOfPages: null,
  isLoading: false,
  errors: "",
};

const dataReducer = createReducer(initialState, {
  ...dataReducers,
});
export default dataReducer;
