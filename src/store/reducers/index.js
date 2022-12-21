import unitsReducer from "./units";
import unitReducer from "./unit";
import containersReducer from "./containers";
import containerReducer from "./container";
import requestsReducer from "./requests";

export default {
  requests: requestsReducer,
  units: unitsReducer,
  unit: unitReducer,
  containers: containersReducer,
  container: containerReducer,
};
