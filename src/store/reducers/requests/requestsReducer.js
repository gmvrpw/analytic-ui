const requestsReducers = {
  GET_TRIGGERED_START: (state) => {
    state.countOfTriggered = null;
    state.isLoading = true;
    state.errors = null;
    return state;
  },
  GET_TRIGGERED_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.countOfTriggered = action.data.result;
  },
  GET_TRIGGERED_FAIL: (state, action) => {
    state.isLoading = false;
    state.errors = action.error;
    return state;
  },
};
export default requestsReducers;
