import _ from 'lodash';
import Communications from 'react-native-communications';
import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount(){
//  we understnad that there's an employee model coming into this component,
// & we're going to iterate over every property of that object, and update our reducer with every property.
    _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate ({ prop, value });
    });
  }

  onButtonPress(){
    const { name, phone, shift } = this.props;
    console.log(name, phone, shift);
    // action creator to save our new data to firebase.
          // we'll pass in the modified values of name, phone and etc
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  onTextPress(){
    const { phone, shift } = this.props;
    Communications.text(phone, `Whats the status of the property 152 Miami Gardens ? $(shift)`);
  }

  render(){
    return(
        <Card>
          <EmployeeForm />
            <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                Save changes
              </Button>
            </CardSection>

            <CardSection>
              <Button onPress={this.onTextPress.bind(this)}>
                  Text 2 Agent
              </Button>
            </CardSection>

        </Card>
    );
  }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave }) (EmployeeEdit);

























//
