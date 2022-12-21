export const getUnitsByUserId = (_id) => ({
  type: "GET_UNITS",
  rest: "/units",
  method: "GET",
  query: {
    page: 0,
    pageSize: 99999999,
    userId: _id,
  },
});
