import * as api from "../../api/api";
import {
  PREDICT_DIABETES_4,
  PREDICT_DIABETES_8,
  PAST_RECORDS_DIABETES,
} from "./actionTypes";
import {
  success_snackbar,
  failure_snackbar,
  info_snackbar,
  hide_snackbar,
} from "./snackbar";
import { show_spinner, hide_spinner } from "./spinner";
import { read_cookie } from "sfcookies";

export const predict_diabetes_4 = (details) => async (dispatch) => {
  try {
    dispatch(info_snackbar("Data sent. Please wait few seconds"));
    dispatch(show_spinner());
    const { data } = await api.predict_diabetes_4(details, read_cookie("uid"));
    dispatch({ type: PREDICT_DIABETES_4, payload: data });
    dispatch(hide_snackbar());
    dispatch(hide_spinner());
    dispatch(success_snackbar("Success"));
  } catch (error) {
    console.log(error.message);
    dispatch(failure_snackbar("Failure"));
  }
};

export const predict_diabetes_8 = (details) => async (dispatch) => {
  try {
    dispatch(info_snackbar("Data sent. Please wait few seconds"));
    dispatch(show_spinner());
    const { data } = await api.predict_diabetes_8(details, read_cookie("uid"));
    dispatch({ type: PREDICT_DIABETES_8, payload: data });
    dispatch(hide_snackbar());
    dispatch(hide_spinner());
    dispatch(success_snackbar("Success"));
  } catch (error) {
    console.log(error.message);
    dispatch(failure_snackbar("Failure"));
  }
};

export const past_records_diabetes = () => async (dispatch) => {
  try {
    dispatch(show_spinner());
    const { data } = await api.past_records_diabetes({
      uid: read_cookie("uid"),
    });
    dispatch({ type: PAST_RECORDS_DIABETES, payload: data });
  } catch (error) {
    console.log(error.message);
    dispatch(failure_snackbar("Failure"));
  }
};
