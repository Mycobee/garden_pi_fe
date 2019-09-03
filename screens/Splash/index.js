import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { fetchWeather, fetchGarden } from '../../Api/ApiCalls';
import { Header } from '../../components';
import styles from './styles';

export default class Splash extends Component {
  state = {
    foreCast: {},
    garden: {}
  }

  async componentDidMount() {
    this.getWeather()
    this.getGarden()
  }
  getWeather = async () => {
    await fetchWeather() 
    .then(weatherData => this.setState({foreCast: weatherData}))
    console.log('weather', this.state.foreCast)  
  }
  getGarden = async () => {
    await fetchGarden()
    .then(gardenData => this.setState({garden: gardenData}))
    console.log('garden', this.state.garden)
  }

  onEnterPress = () => {
    this.props.navigation.navigate('Home', {
      foreCast: this.state.foreCast
    })
  }

  render() {
    return (
      <ImageBackground 
        source={require('../../assets/images/splash-background.jpg')}
        style={styles.container}
      >
        <Header />
        <View style={styles.textContainer}>
          <Text style={styles.splashHeader}>Welcome!</Text>
          <Image 
              source={require('../../assets/images/sprout.png')}
              style={styles.plantIcon} />
          <TouchableOpacity 
            style={styles.splashEnterBtn}
            onPress={this.onEnterPress}
          >
            <Text>
              Enter your Garden...
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}