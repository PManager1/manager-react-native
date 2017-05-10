import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './employeeFormReducer';
// import EmployeeFormReducer2 from './EmployeeFormReducer';
// import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
