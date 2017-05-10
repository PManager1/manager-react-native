//  one action to handle any update.
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
      type: EMPLOYEE_UPDATE,
      payload: { prop, value }
  };
};
