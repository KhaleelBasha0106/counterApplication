import actionType from "../assets/actionType";

const initialState = {
  value: 0,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.Increment:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case actionType.Decrement:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};
