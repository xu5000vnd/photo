import { CSRF_TOKEN } from '../actions/types';

const INITIAL_STATE = {
  _csrf: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CSRF_TOKEN:
      return { ...state, _csrf: action.payload };
    default:
      return state;
  }
};
