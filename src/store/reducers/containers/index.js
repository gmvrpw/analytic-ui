import { createReducer } from "@reduxjs/toolkit";
import containersReducers from "./containersReducers";

const initialState = {
  name: "Рекурсивная аналитика",
  containers: [],
  createdContainerId: null,
  isCreating: false,
  isLoading: false,
  isDeleting: false,
  errors: "",
};

const containersReducer = createReducer(initialState, {
  ...containersReducers,
});
export default containersReducer;
