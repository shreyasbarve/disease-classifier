import * as api from "../../api/api";
import { PREDICT_DIABETES_4, PREDICT_DIABETES_8 } from "./actionTypes";

export const predict_diabetes_4 = (details) => async (dispatch) => {
  try {
    const { data } = await api.predict_diabetes_4(details);
    dispatch({ type: PREDICT_DIABETES_4, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const predict_diabetes_8 = (details) => async (dispatch) => {
  try {
    const { data } = await api.predict_diabetes_8(details);
    dispatch({ type: PREDICT_DIABETES_8, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
