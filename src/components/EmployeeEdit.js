import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
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

export default connect(null) (EmployeeEdit);
