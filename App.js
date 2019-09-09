import React, { Component, Fragment } from 'react';
import Routes from './screens/Routes';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StyleSheet, StatusBar } from 'react-native';

export default class App extends Component {
  state = {
    isFontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'lemondrop': require('./assets/fonts/Lemondrop.ttf')
    });
    this.setState({ isFontLoaded: true })
  }
  render() {
    if(!this.state.isFontLoaded) {
      return <AppLoading />
    } else {
      return (
        <Fragment>
          <StatusBar barStyle='light-content' />
          <Routes />
        </Fragment>
      )
    };
  };
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
});
