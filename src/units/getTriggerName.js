const getTriggerName = (trigger) => {
  if (!trigger) {
    return "?";
  }
  return `${trigger.element.name}#${trigger.element.id}.${trigger.element.className}(${trigger.event})`;
};

export default getTriggerName;
