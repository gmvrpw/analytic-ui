const dataReducers = {
  GET_DATA_START: (state) => {
    state.data = [];
    state.countOfPage = null;
    state.isLoading = true;
    state.errors = null;
    return state;
  },
  GET_DATA_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.data = action.data.data;
    state.countOfPages = action.data.countOfPages;
  },
  GET_DATA_FAIL: (state, action) => {
    state.isLoading = false;
    state.errors = action.error;
    return state;
  },
};
export default dataReducers;
