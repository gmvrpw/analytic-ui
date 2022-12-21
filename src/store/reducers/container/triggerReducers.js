const triggerReducers = {
  UPDATE_TRIGGER: (state, action) => {
    const { _id, trigger } = action.query;
    for (const triggerIndex in state.triggers) {
      if (state.triggers[triggerIndex].triggerId == _id) {
        state.triggers[triggerIndex] = trigger;
        break;
      }
    }
    state.sync = false;
    return state;
  },
  DELETE_TRIGGER: (state, action) => {
    const { _id } = action.query;
    state.triggers = state.triggers.filter(
      (trigger) => trigger.triggerId != _id
    );
    state.sync = false;
    return state;
  },
  CREATE_TRIGGER: (state, action) => {
    const { trigger } = action.query;
    state.uniqueTriggerId -= 1;
    trigger.triggerId = state.uniqueTriggerId;
    state.triggers.push(trigger);
    state.sync = false;
    return state;
  },
};
export default triggerReducers;
