import { EMAIL_CHANGED } from './types';

// when email changes
export const emailChanged = (text) => {
  // we wanna call this action
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
