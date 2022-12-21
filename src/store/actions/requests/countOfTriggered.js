export const getCountOfTriggered = (triggerId, dateFrom, dateTo, unique) => ({
  type: "GET_TRIGGERED",
  rest: "/requests/triggered",
  method: "GET",
  query: {
    triggerId,
    dateFrom,
    dateTo,
    unique,
  },
});
