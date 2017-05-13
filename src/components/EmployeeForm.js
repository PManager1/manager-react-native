import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
//  only show the names, shift and phone no.

class EmployeeForm extends Component  {
  render(){

return(
    <View>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={this.props.name}
          onChangeText={ text => this.props.employeeUpdate( { prop: 'name', value: text })}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Phone no"
          placeholder="999-999-9999"
          value={this.props.phone}
          onChangeText={ text => this.props.employeeUpdate( { prop: 'phone', value: text })}
        />
      </CardSection>

      <CardSection style={{ flexDirection: 'column' }} >
        <Text style={styles.pickerTextStyle}>
          Shift
        </Text>
        <Picker
          style={{ flex: 1 }}
          selectedValue={this.props.shift}
          onValueChange={day => this.props.employeeUpdate({ props: 'shift', value: day }) }
        >
        <Picker.Item label="Sunday" value="Sunday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
      </CardSection>
    </View>
  );
}
}


const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};


// export default EmployeeForm;
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};


export default connect( mapStateToProps, { employeeUpdate }) (EmployeeForm);
