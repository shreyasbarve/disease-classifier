import * as api from "../../api/api";
import { REGISTER_USER } from "./actionTypes";
import { failure_snackbar } from "./snackbar";
import { bake_cookie } from "sfcookies";

// action creators
export const register_user = (user) => async (dispatch) => {
  try {
    bake_cookie("uid", user.uid);
    const { data } = await api.register_user(user);
    dispatch({ type: REGISTER_USER, payload: data });
  } catch (error) {
    console.log(error);
    dispatch(failure_snackbar("User Login Failed"));
  }
};
