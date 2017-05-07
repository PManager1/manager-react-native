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
            />
          </CardSection>

          <CardSection>
          <Input
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

export default connect(null, { emailChanged })(LoginForm);
