import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';

import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChnage(text){
    this.props.emailChanged(text);
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
          />
          </CardSection>

          <CardSection>
            <Button>
              Log In
            </Button>
          </CardSection>


        </Card>
    );
  }
}

const mapStateToProps = state => {
    return {
      email: state.auth.email
    };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
