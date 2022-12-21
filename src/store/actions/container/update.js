export const updateContainer = (name) => ({
  type: "UPDATE_CONTAINER",
  query: {
    name,
  },
});
