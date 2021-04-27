// action types
import {
  PAST_RECORDS_DIABETES,
  PREDICT_DIABETES_4,
  PREDICT_DIABETES_8,
} from "../actions/actionTypes";

const initialState = {
  RandomForestNormal: 0,
  RandomForestUnskewed: 0,
  KNNUnskewed: 0,
  Ones: 0,
};

export const diabetesReducer = (details = initialState, action) => {
  switch (action.type) {
    case PREDICT_DIABETES_4:
    case PREDICT_DIABETES_8:
      return action.payload;
    default:
      return details;
  }
};

const initialState2 = [
  {
    date: "",
    input: {},
    result: {},
  },
];

export const pastDiabetesReducer = (state = initialState2, action) => {
  switch (action.type) {
    case PAST_RECORDS_DIABETES:
      return action.payload;
    default:
      return state;
  }
};
