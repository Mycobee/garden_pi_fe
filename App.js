import React, { Component, Fragment } from 'react';
import Routes from './screens/Routes';
import { fetchWeather, fetchGarden } from './Api/ApiCalls'
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends Component {
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
    marginTop: 100
  },
});
