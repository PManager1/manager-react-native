//  one action to handle any update.
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
      type: EMPLOYEE_UPDATE,
      payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) =>  {
  // console.log(' value of name', name);
  // console.log(' value of phone', phone);
  // console.log(' value of shift', shift);
  console.log( name, phone, shift );
};
