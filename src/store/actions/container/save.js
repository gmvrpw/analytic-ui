export const saveContainer = (_id, container) => {
  container.triggers.forEach((trigger) => {
    if (trigger.id < 0) {
      delete trigger.id;
    }
  });
  return {
    type: "SAVE_CONTAINER",
    rest: `/containers/${_id}`,
    method: "PUT",
    query: {
      containerId: _id,
      containerName: container.containerName,
      triggers: container.triggers,
    },
  };
};
