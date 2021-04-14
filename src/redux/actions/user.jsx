import * as api from "../../api/api";
import { REGISTER_USER } from "./actionTypes";

// action creators
export const register_user = (user) => async (dispatch) => {
  try {
    const { data } = await api.register_user(user);
    dispatch({ type: REGISTER_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
