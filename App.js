import React, { Component, Fragment } from 'react';
import Splash from './screens/Splash';
import Routes from './screens/Routes';
import { fetchWeather, fetchGarden } from './Api/ApiCalls'
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      foreCast: {},
      garden: {}
    }
  }

  async componentDidMount() {
    this.getWeather()
    this.getGarden()
  }

  getWeather = async () => {
    await fetchWeather() 
    .then(weatherData => this.setState({foreCast: weatherData.currently}))
    console.log('weather', this.state.foreCast)  
  }

  getGarden = async () => {
    await fetchGarden()
    .then(gardenData => this.setState({garden: gardenData}))
    console.log('garden', this.state.garden)
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
