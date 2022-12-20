import { createReducer } from "@reduxjs/toolkit";
import containerReducers from "./containerReducers";
import triggerReducers from "./triggerReducers";

const initialState = {
  uniqueTriggerId: 0,
  containerId: 0,
  containerName: "",
  triggers: [],
  isLoading: false,
  isSaving: false,
  errors: "",
  sync: false,
};

const containerReducer = createReducer(initialState, {
  ...containerReducers,
  ...triggerReducers,
});
export default containerReducer;
