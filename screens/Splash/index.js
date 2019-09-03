import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { fetchCurrentWeather } from '../../Api/ApiCalls';
import { Header } from '../../components';
import styles from './styles';

export default class Splash extends Component {
  state = {
    foreCast: {}
  }

  async componentDidMount() {
    const weatherData = await fetchCurrentWeather() 
    await this.setState({foreCast: weatherData})
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