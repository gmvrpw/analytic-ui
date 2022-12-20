export const createTrigger = (trigger) => ({
  type: "CREATE_TRIGGER",
  query: {
    trigger,
  },
});
