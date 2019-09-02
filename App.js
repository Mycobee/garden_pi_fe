import React, { Component, Fragment } from 'react';
import Splash from './screens/Splash';
import Routes from './screens/Routes';
import { fetchWeather } from './Api/ApiCalls'
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      foreCast: {}
    }
  }

  async componentDidMount() {
    const weatherData = await fetchWeather() 
    await this.setState({foreCast: weatherData.currently})
    console.log('weather', this.state)   
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
