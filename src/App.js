import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'
import firebase from 'firebase';

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBZgXyJazDGH5ok8notPV0bO-5S4IlR7AY',
      authDomain: 'auth-db0d0.firebaseapp.com',
      databaseURL: 'https://auth-db0d0.firebaseio.com',
      projectId: 'auth-db0d0',
      storageBucket: 'auth-db0d0.appspot.com',
      messagingSenderId: '219866115537'
    })
  }
  render() {
    return (
      <View>
        <Header headerText="Authentification" />
        <LoginForm />
      </View>
    );
  }
}
