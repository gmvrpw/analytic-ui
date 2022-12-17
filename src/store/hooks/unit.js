import { useSelector, useDispatch } from "react-redux";
import { setName } from "../slices/unit";

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
