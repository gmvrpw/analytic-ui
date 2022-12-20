export const createContainer = (unitId, name) => ({
  type: "CREATE_CONTAINER",
  rest: "/containers",
  method: "POST",
  query: {
    userId: 1,
    unitId,
    containerName: name,
    triggers: [],
  },
});
