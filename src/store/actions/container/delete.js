export const deleteContainer = (id) => ({
  type: "DELETE_CONTAINER",
  rest: `/containers/${id}`,
  method: "DELETE",
  query: {},
});
