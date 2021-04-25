import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { diabetesReducer, pastDiabetesReducer } from "./diabetesReducer";
import { pneumoniaReducer, pastPnuemoniaReducer } from "./pneumoniaReducer";
import snackbarReducer from "./snackbarReducer";
import spinnerReducer from "./spinnerReducer";

export default combineReducers({
  userReducer,
  snackbarReducer,
  spinnerReducer,
  diabetesReducer,
  pastDiabetesReducer,
  pneumoniaReducer,
  pastPnuemoniaReducer,
});
