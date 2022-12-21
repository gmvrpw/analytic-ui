const containerReducers = {
  GET_CONTAINER_START: (state) => {
    state.isLoading = true;
    state.errors = null;
    return state;
  },
  GET_CONTAINER_SUCCESS: (state, action) => {
    return {
      ...state,
      ...action.data,
      isLoading: false,
    };
  },
  GET_CONTAINER_FAIL: (state, action) => {
    state.isLoading = false;
    state.errors = action.error;
    return state;
  },
  UPDATE_CONTAINER: (state, action) => {
    state.containerName = action.query.name;
    return state;
  },
  SAVE_CONTAINER_START: (state) => {
    state.isSaving = true;
    state.errors = null;
    return state;
  },
  SAVE_CONTAINER_SUCCESS: (state, action) => {
    return {
      ...state,
      ...action.data,
    };
  },
  SAVE_CONTAINER_FAIL: (state, action) => {
    state.isSaving = false;
    state.errors = action.error;
    return state;
  },
};
export default containerReducers;
