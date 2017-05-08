import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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
