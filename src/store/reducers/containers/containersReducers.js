const containersReducers = {
  GET_CONTAINERS_START: (state) => {
    state.containers = [];
    state.isLoading = true;
    state.errors = null;
    return state;
  },
  GET_CONTAINERS_SUCCESS: (state, action) => {
    state.isLoading = false;
    action.data.forEach((container) => {
      state.containers.push(container);
    });
    return state;
  },
  GET_CONTAINERS_FAIL: (state, action) => {
    state.isLoading = false;
    state.errors = action.error;
    return state;
  },
  CREATE_CONTAINER_START: (state) => {
    state.createdContainerId = null;
    state.isCreating = true;
    state.errors = null;
    return state;
  },
  CREATE_CONTAINER_SUCCESS: (state, action) => {
    state.isCreating = false;
    state.containers.push(action.data);
    return state;
  },
  CREATE_CONTAINERS_FAIL: (state, action) => {
    state.isCreating = false;
    state.errors = action.error;
    return state;
  },
};
export default containersReducers;
