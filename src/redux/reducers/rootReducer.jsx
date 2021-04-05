import { combineReducers } from "redux";
import diabetesReducer from "./diabetesReducer";
import userReducer from "./userReducer";

export default combineReducers({ diabetesReducer, userReducer });
