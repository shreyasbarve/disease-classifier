import { PREDICT_DIABETES_4, PREDICT_DIABETES_8 } from "../actions/actionTypes";

const initialState = {
  RandomForestNormal: 0,
  RandomForestUnskewed: 0,
  KNNUnskewed: 0,
};

const diabetesReducer = (details = initialState, action) => {
  switch (action.type) {
    case PREDICT_DIABETES_4:
    case PREDICT_DIABETES_8:
      return action.payload;
    default:
      return details;
  }
};

export default diabetesReducer;
