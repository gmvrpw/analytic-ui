import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { httpApi } from "./middlewares/api";

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), httpApi],
});
