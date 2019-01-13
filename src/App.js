import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import LogOutForm from './components/LogOutForm';

type Props = {};
export default class App extends Component<Props> {
  state = {
    loggedIn: null,
  };

  componentWillMount() {
    firebase.initializeApp({
    //   Here add data from google firebase
    //   apiKey: 'AIzaSyBZgXyJazDGH5ok8notPV0bO-5S4IlR7AY',
    //   authDomain: 'auth-db0d0.firebaseapp.com',
    //   databaseURL: 'https://auth-db0d0.firebaseio.com',
    //   projectId: 'auth-db0d0',
    //   storageBucket: 'auth-db0d0.appspot.com',
    //   messagingSenderId: '219866115537'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(this.state.loggedIn, user);
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
      console.log('what the fox said');
    });
  }

  logOutAutentification = () => {
    firebase.auth().signOut();
  }

  renderContent() {
    const { spinnerStyle } = styles;
    switch (this.state.loggedIn) {
      case true:
        return (<LogOutForm onClick={this.logOutAutentification} />);
      case false:
        return (<LoginForm />);
      default:
        return (
          <View style={spinnerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentification" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    marginTop: 100,
  }
};

