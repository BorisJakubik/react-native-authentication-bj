import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header headerText="Authentification" />
        <Text>My autentification app!</Text>
      </View>
    );
  }
}
