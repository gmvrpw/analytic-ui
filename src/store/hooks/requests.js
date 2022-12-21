import { useDispatch, useSelector } from "react-redux";
import { getCountOfTriggered } from "../actions/requests/countOfTriggered";

export const useCountOfTriggered = () => {
  const dispatch = useDispatch();
  return [
    useSelector((state) => state.requests.countOfTriggered),
    (triggerId, from, to, unique) => {
      dispatch(
        getCountOfTriggered(
          triggerId,
          isNaN(Date.parse(from)) ? -1 : Date.parse(from),
          isNaN(Date.parse(to)) ? -1 : Date.parse(to),
          unique
        )
      );
    },
  ];
};
