import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../actions/data/get";

export const useData = (unitId, page, pageSize) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(unitId, page, pageSize));
  }, [unitId, page]);
  const data = useSelector((state) => state.data.data);
  const countOfPages = useSelector((state) => state.data.countOfPages);
  const isLoading = useSelector((state) => state.data.isLoading);
  const errors = useSelector((state) => state.data.errors);
  return { data, countOfPages, isLoading, errors };
};
