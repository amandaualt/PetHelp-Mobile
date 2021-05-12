import {SET_PETS} from '../actions';

export default function petReducer(state = null, action) {
  switch (action.type) {
    case SET_PETS:
      return action.pets;
    default:
      return state;
  }
}
