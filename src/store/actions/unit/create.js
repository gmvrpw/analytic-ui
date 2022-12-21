export const createUnit = (userId, name) => ({
  type: "CREATE_UNIT",
  rest: "/units",
  method: "POST",
  query: {
    userId,
    unitName: name,
  },
});
