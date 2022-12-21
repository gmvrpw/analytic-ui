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
      sync: true,
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
    state.sync = false;
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
      sync: true,
    };
  },
  SAVE_CONTAINER_FAIL: (state, action) => {
    state.isSaving = false;
    state.errors = action.error;
    return state;
  },
};
export default containerReducers;
