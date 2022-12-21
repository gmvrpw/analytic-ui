import unitsReducer from "./units";
import unitReducer from "./unit";
import containersReducer from "./containers";
import containerReducer from "./container";
import requestsReducer from "./requests";
import dataReducer from "./data";

export default {
  data: dataReducer,
  requests: requestsReducer,
  units: unitsReducer,
  unit: unitReducer,
  containers: containersReducer,
  container: containerReducer,
};
