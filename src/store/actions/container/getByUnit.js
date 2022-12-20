export const getContainersByUnitId = (_id) => ({
  type: "GET_CONTAINERS",
  rest: "/containers",
  method: "GET",
  query: {
    page: 0,
    pageSize: 99999999,
    unitId: _id,
  },
});
