const unitReducers = {
  GET_UNIT_START: (state, action) => {
    state[action.query._id] = {};
    state[action.query._id].isLoading = true;
    state[action.query._id].errors = null;
    return state;
  },
  GET_UNIT_SUCCESS: (state, action) => {
    state[action.prevAction.query._id].isLoading = false;
    state[action.prevAction.query._id] = {
      ...action.data,
      ...state[action.prevAction.query._id],
    };
    return state;
  },
  GET_UNIT_FAIL: (state, action) => {
    state[action.prevAction.query._id].isLoading = false;
    state[action.prevAction.query._id].errors = action.error;
    return state;
  },
};
export default unitReducers;
