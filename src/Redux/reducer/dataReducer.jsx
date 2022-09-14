import { ActionTypes } from "../constants/actiontype";
export const dataReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DATA:
      return {...payload};
    default:
      return state;
  }
};
