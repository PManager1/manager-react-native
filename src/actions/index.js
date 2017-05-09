import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';
import { Actions } from 'react-native-router-flux';
// when email changes
export const emailChanged = (text) => {
  // we wanna call this action
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return{
        type: PASSWORD_CHANGED,
        payload: text
    };
};


export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    // we're going to immidiately dispatch an action of type  loginUser whenever this aciton creator is called.
    dispatch({ type: LOGIN_USER })
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch((error) => {
        console.log('26- error =', error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(()=> loginUserFail(dispatch));
    });
  };
};

const loginUserFail = (dispatch) => {
  dispatch ({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });

    Actions.main();
};























//
