import axios from "axios";

const URL = "https://disease-predictor-backend.herokuapp.com";

export const register_user = (data) => axios.post(`${URL}/register`, data);
// body
// { email, uid }
// response
// sucess: 201 - Student registered succesfully
// failure: 400 - unable to register

export const predict_diabetes_8 = (data) =>
  axios.post(`${URL}/diabetes/predict8`, data);
// body
// {pregnancies, glucose, bp, skin_thickness, insulin, bmi, dp_function, age}
// response
// { RandomForestNormal, RandomForestUnskewed, KNNUnskewed }

export const predict_diabetes_4 = (data) =>
  axios.post(`${URL}/diabetes/predict4`, data);
// body
// { glucose, bmi, dp_function, age}
// response
// { GBM, RandomForestNormal, RandomForestUnskewed, KNNUnskewed }
