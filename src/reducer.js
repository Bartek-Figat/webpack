import { incremented, decremented } from './type';

const initialState = {
  counter: 0,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case incremented:
      return {
        ...state,
        payload: state.counter++,
      };
    case decremented:
      return {
        ...state,
        payload: state.counter--,
      };
    default:
      return state;
  }
};
