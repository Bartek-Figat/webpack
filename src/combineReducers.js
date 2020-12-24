import { combineReducers } from 'redux';
import useCounter from './reducer';
export default combineReducers({
  counter: useCounter,
});
