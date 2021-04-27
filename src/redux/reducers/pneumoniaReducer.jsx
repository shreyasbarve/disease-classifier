// action types
import {
  PREDICT_PNEUMONIA,
  PAST_RECORDS_PNEUMONIA,
} from "../actions/actionTypes";

const inititalState = {
  Prediction: 0,
  Accuracy: 0,
};

export const pneumoniaReducer = (state = inititalState, action) => {
  switch (action.type) {
    case PREDICT_PNEUMONIA:
      return action.payload;
    default:
      return state;
  }
};

const initialState2 = [
  {
    date: "",
    input: {},
    result: {},
  },
];

export const pastPnuemoniaReducer = (state = initialState2, action) => {
  switch (action.type) {
    case PAST_RECORDS_PNEUMONIA:
      return action.payload;
    default:
      return state;
  }
};
