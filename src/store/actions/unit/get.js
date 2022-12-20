export const getUnit = (_id) => ({
  type: "GET_UNIT",
  rest: `/unit/${_id}`,
  method: "GET",
  query: {
    _id,
  },
});
