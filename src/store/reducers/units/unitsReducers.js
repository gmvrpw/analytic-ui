const unitsReducers = {
  GET_UNITS_START: (state) => {
    state.units = [];
    state.isLoading = true;
    state.errors = null;
    return state;
  },
  GET_UNITS_SUCCESS: (state, action) => {
    state.isLoading = false;
    action.data.forEach((unit) => {
      state.units.push(unit);
    });
    return state;
  },
  GET_UNITS_FAIL: (state, action) => {
    state.isLoading = false;
    state.errors = action.error;
    return state;
  },
  CREATE_UNIT_START: (state) => {
    state.isCreating = true;
    state.errors = null;
    return state;
  },
  CREATE_UNIT_SUCCESS: (state, action) => {
    state.isCreating = false;
    state.units.push(action.data);
    return state;
  },
  CREATE_UNIT_FAIL: (state, action) => {
    state.isCreating = false;
    state.errors = action.error;
    return state;
  },
};
export default unitsReducers;
