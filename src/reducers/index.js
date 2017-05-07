import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  // banana: () => []
  // means auth peace of state is produced by auth reducer. 
  auth: AuthReducer
});
