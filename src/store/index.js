import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/auth";
import unitSliceReducer from "./slices/unit";

export default configureStore({
  reducer: {
    auth: authSliceReducer,
    unit: unitSliceReducer,
  },
});
