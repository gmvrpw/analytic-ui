import { useDispatch, useSelector } from "react-redux";
import { getContainersByUnitId } from "../actions/container/getByUnit";
import { useEffect } from "react";
import { getContainer } from "../actions/container/get";
import { updateTrigger } from "../actions/trigger/update";
import { deleteTrigger } from "../actions/trigger/delete";
import { createTrigger } from "../actions/trigger/create";
import { saveContainer } from "../actions/container/save";
import { createContainer } from "../actions/container/create";
import { deleteContainer } from "../actions/container/delete";
import { getUnitsByUserId } from "../actions/unit/getByUser";
import { createUnit } from "../actions/unit/create";
import { updateContainer } from "../actions/container/update";

export const useUnits = (userId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUnitsByUserId(userId));
  }, []);
  const units = useSelector((state) => state.units.units);
  const isLoading = useSelector((state) => state.units.isLoading);
  const errors = useSelector((state) => state.units.errors);
  return { units, isLoading, errors };
};

export const useCreateUnit = (userId) => {
  const dispatch = useDispatch();
  return (name) => {
    dispatch(createUnit(userId, name));
  };
};

export const useContainers = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContainersByUnitId(id));
  }, []);
  const containers = useSelector((state) => state.containers.containers);
  const isLoading = useSelector((state) => state.containers.isLoading);
  const errors = useSelector((state) => state.containers.errors);
  return { containers, isLoading, errors };
};

export const useCreateContainer = (unitId) => {
  const dispatch = useDispatch();
  return (name) => {
    dispatch(createContainer(unitId, name));
  };
};

export const useDeleteContainer = (containerId) => {
  const dispatch = useDispatch();
  return () => {
    dispatch(deleteContainer(containerId));
  };
};

export const useContainer = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContainer(id));
  }, []);
  const container = useSelector((state) => state.container);
  const { isLoading, errors } = container;
  return {
    container,
    isLoading,
    errors,
    updateContainer: (name) => {
      dispatch(updateContainer(name));
    },
  };
};

export const useUpdateTrigger = (id) => {
  const dispatch = useDispatch();
  return (trigger) => {
    dispatch(updateTrigger(id, trigger));
  };
};

export const useDeleteTrigger = (id) => {
  const dispatch = useDispatch();
  return () => {
    dispatch(deleteTrigger(id));
  };
};

export const useSaveContainer = (id) => {
  const dispatch = useDispatch();
  return (container) => {
    dispatch(saveContainer(id, container));
  };
};

export const useCreateTrigger = () => {
  const dispatch = useDispatch();
  return (trigger) => {
    dispatch(createTrigger(trigger));
  };
};
