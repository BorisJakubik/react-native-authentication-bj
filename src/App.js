import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'
import firebase from 'firebase';

type Props = {};
export default class App extends Component<Props> {
  state = {
    loggedIn: null,
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBZgXyJazDGH5ok8notPV0bO-5S4IlR7AY',
      authDomain: 'auth-db0d0.firebaseapp.com',
      databaseURL: 'https://auth-db0d0.firebaseio.com',
      projectId: 'auth-db0d0',
      storageBucket: 'auth-db0d0.appspot.com',
      messagingSenderId: '219866115537'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(this.state.loggedIn, user);
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
      console.log('what the fox said');
    })
  }

  renderContent() {
    swith(this.state.loggedIn) {
      case true: 
    }
    if(this.state.loggedIn) {
      return (
        <Card>
          <CardSection>
            <Button>
              Logg out
            </Button>
          </CardSection>
        </Card>
      );
    } 
    return (<LoginForm />);
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
