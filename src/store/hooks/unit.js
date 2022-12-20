import { useSelector, useDispatch } from "react-redux";
import {
  createTrigger,
  deleteTrigger,
  setName,
  updateTrigger,
} from "../slices/unit";

export const useUnitName = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.unit.name);
  const setUnitName = (name) => {
    dispatch(setName({ name }));
  };
  return [name, setUnitName];
};

export const useContainers = () => {
  const containers = useSelector((state) => state.unit.containers);
  return [containers];
};

export const useContainer = (id) => {
  const containers = useSelector((state) => state.unit.containers);
  return containers.filter((container) => container.id == id)[0];
};

export const useTrigger = (id) => {
  const dispatch = useDispatch();
  const containers = useSelector((state) => state.unit.containers);
  for (const containerIndex in containers) {
    for (const triggerIndex in containers[containerIndex].triggers) {
      if (containers[containerIndex].triggers[triggerIndex].id === id) {
        return [
          containers[containerIndex].triggers[triggerIndex],
          (trigger) => {
            dispatch(updateTrigger({ containerIndex, triggerIndex, trigger }));
          },
          () => {
            dispatch(deleteTrigger({ id }));
          },
        ];
      }
    }
  }
};

export const useCreateTrigger = (containerId) => {
  const dispatch = useDispatch();
  return (trigger) => {
    dispatch(createTrigger({ containerId, trigger }));
  };
};
