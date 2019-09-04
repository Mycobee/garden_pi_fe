import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { fetchWeather, fetchGarden, fetchGardenEnv } from '../../Api/ApiCalls';
import { Header } from '../../components';
import styles from './styles';

export default class Splash extends Component {
  state = {
    foreCast: {},
    garden: {},
    env: {}
  };

  async componentDidMount() {
    this.getWeather()
    this.getGarden()
    this.getEnv()
  };
  getWeather = async () => {
    await fetchWeather() 
    .then(weatherData => this.setState({foreCast: weatherData}))
  };
  getGarden = async () => {
    await fetchGarden()
    .then(gardenData => this.setState({garden: gardenData}))
    console.log(this.state.garden)
  };

  getEnv = async () => {
    await fetchGardenEnv()
    .then(envData => this.setState({env: envData}))
  };

  onEnterPress = () => {
    this.props.navigation.navigate('Home', {
      foreCast: this.state.foreCast
    })
  };

  render() {
    return (
      <ImageBackground 
        source={require('../../assets/images/splash-background.jpg')}
        style={styles.container}
      >
        <View>
          <Header style={styles.splashHeader} />
          <View style={styles.textContainer}>
            <TouchableOpacity 
              style={styles.splashEnterBtn}
              onPress={this.onEnterPress}
            >
              <Text>
                Enter your Garden...
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    )
  }
};