import React, { Component, Fragment } from 'react';
import Routes from './screens/Routes';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      foreCast: {}
    }
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle='light-content' />
        <Routes />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73A686',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
