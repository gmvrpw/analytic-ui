export const deleteTrigger = (_id) => ({
  type: "DELETE_TRIGGER",
  query: {
    _id,
  },
});
