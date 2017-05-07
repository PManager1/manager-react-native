import { EMAIL_CHANGED } from '../actions/types';
//  new reducer to handle the email change actions.

 //  we're using null coz for the very first time when teh file loads
 //  we dont need to have state =undefined, so we define it for the very first time by INITIAL_STATE
//so the inital state of email = ''  i.e empty string.
const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action ) => {
    switch (action, type){
      case EMAIL_CHANGED:
// make a new object, take all of the properties of existing state object, throw them into that object, then define the property email, give it a value of action.payload. 
        return { ...state, email: action.payload };
      default:
        return state;
    }
};

//  it can be accessed by state.auth.email = empty string.
