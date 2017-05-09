import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="employeeList" component={EmployeeList} title="Employees" />
      <Scene key="login" component={LoginForm} title="Please login" initial />
    </Router>
  );
};
export default RouterComponent;
