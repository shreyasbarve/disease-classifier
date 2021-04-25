import * as api from "../../api/api";
import {
  PREDICT_PNEUMONIA,
  PAST_RECORDS_PNEUMONIA,
} from "../actions/actionTypes";
import {
  success_snackbar,
  failure_snackbar,
  info_snackbar,
  hide_snackbar,
} from "./snackbar";
import { show_spinner, hide_spinner } from "./spinner";
import { read_cookie } from "sfcookies";

export const predict_pneumonia = (details) => async (dispatch) => {
  try {
    dispatch(info_snackbar("Data sent. Please wait few seconds"));
    dispatch(show_spinner());
    const { data } = await api.predict_pneumonia(details, read_cookie("uid"));
    dispatch({ type: PREDICT_PNEUMONIA, payload: data });
    dispatch(hide_snackbar());
    dispatch(hide_spinner());
    dispatch(success_snackbar("Success"));
  } catch (error) {
    console.log(error.message);
    dispatch(failure_snackbar("Failure"));
  }
};

export const past_records_pneumonia = () => async (dispatch) => {
  try {
    dispatch(show_spinner());
    const { data } = await api.past_records_pneumonia({
      uid: read_cookie("uid"),
    });
    dispatch({ type: PAST_RECORDS_PNEUMONIA, payload: data });
    dispatch(hide_spinner());
  } catch (error) {
    console.log(error.message);
    dispatch(failure_snackbar("Failure"));
  }
};