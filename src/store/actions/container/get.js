export const getContainer = (_id) => ({
  type: "GET_CONTAINER",
  rest: `/containers/${_id}`,
  method: "GET",
  query: {
    _id,
  },
});
