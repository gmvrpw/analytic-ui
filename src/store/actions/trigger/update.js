export const updateTrigger = (_id, trigger) => ({
  type: "UPDATE_TRIGGER",
  query: {
    _id,
    trigger,
  },
});
