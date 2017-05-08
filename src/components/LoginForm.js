import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChnage(text){
    this.props.emailChanged(text);
  }
  onPasswordChange(text){
    console.log(' password change');
    this.props.passwordChanged(text);
  }
  onButtonPress(){
    const { email, password } = this.props;
    this.props.loginUser ({ email, password });
  }
  render(){
    return (
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChnage.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Log In
            </Button>
          </CardSection>


        </Card>
    );
  }
}

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      password: state.auth.password
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
