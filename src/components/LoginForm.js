import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChnage(text){
    this.props.emailChanged(text);
  }
  onPasswordChange(text){
    console.log(' password change');
    this.props.passwordChanged(text);
  }
  onButtonPress(){
    console.log(' loginUser = ', loginUser);
    const { email, password } = this.props;
    this.props.loginUser ({ email, password });
  }
  renderButton(){
    if (this.props.loading ){
      return <Spinner size="large" />;
    }
   return (
     <Button onPress={this.onButtonPress.bind(this)}>
      Log In
    </Button>
  );
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

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
    return {
      email,
      password,
      error,
      loading
    };
};

const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
};

// const mapStateToProps = state => {
//     return {
//       email: state.auth.email,
//       password: state.auth.password,
//       user: state.auth.error
//     };
// };


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
