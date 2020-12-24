import { incremented, decremented } from './type';
export function inc() {
  return {
    type: incremented,
  };
}

export function dec() {
  return {
    type: decremented,
  };
}
