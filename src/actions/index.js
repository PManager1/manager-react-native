
// when email changes
export const emailChanged = (text) => {
  // we wanna call this action
    return {
        type: 'email_changed',
        payload: text
    };
};
