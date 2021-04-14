import { combineReducers } from "redux";
import diabetesReducer from "./diabetesReducer";
import userReducer from "./userReducer";
import snackbarReducer from "./snackbarReducer";

export default combineReducers({
  diabetesReducer,
  userReducer,
  snackbarReducer,
});
