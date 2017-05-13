import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount(){
    //  we understnad that there's an employee model coming into this component,
    // & we're going to iterate over every property of that object, and update our reducer with every property.
    // 
    _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate ({ prop, value });
    });
  }
  render(){
    return(
        <Card>
          <EmployeeForm />
            <CardSection>
              <Button>
                Save changes
              </Button>
            </CardSection>
        </Card>
    );
  }
}

export default connect(null, { employeeUpdate }) (EmployeeEdit);
