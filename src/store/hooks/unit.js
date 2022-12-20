import { useDispatch, useSelector } from "react-redux";
import { getContainersByUnitId } from "../actions/container/getByUnit";
import { useEffect } from "react";
import { getContainer } from "../actions/container/get";
import { updateTrigger } from "../actions/trigger/update";
import { deleteTrigger } from "../actions/trigger/delete";
import { createTrigger } from "../actions/trigger/create";
import { saveContainer } from "../actions/container/save";

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

export const useCreateTrigger = () => {
  const dispatch = useDispatch();
  return (trigger) => {
    dispatch(createTrigger(trigger));
  };
};

export const useSaveContainer = (id) => {
  const dispatch = useDispatch();
  return (container) => {
    dispatch(saveContainer(id, container));
  };
};
