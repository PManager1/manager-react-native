import { EMAIL_CHANGED } from '../actions/types';

//  a function with 2 arguments, and export it by default.
const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EMAIL_CHANGED:
        return { ...state, email: action.payload }; 
      default:
          return state;
    }
};
