export const getData = (unitId, page, pageSize) => ({
  type: "GET_DATA",
  rest: "/data",
  method: "GET",
  query: {
    unitId,
    page,
    pageSize,
  },
});
