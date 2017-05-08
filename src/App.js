import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    var config = {
        apiKey: "AIzaSyDyLCcGUO5pWRpLUAoswONEZhwQ8iW0t1I",
        authDomain: "authentication-18257.firebaseapp.com",
        databaseURL: "https://authentication-18257.firebaseio.com",
        projectId: "authentication-18257",
        storageBucket: "authentication-18257.appspot.com",
        messagingSenderId: "1086509504112"
      };
      firebase.initializeApp(config);
  }


  render(){
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
}
}

export default App;
