import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { Header, WeatherBox } from '../../components';
import styles from './styles';

export class index extends Component {
  getWeatherIcon = condition => {
    switch(condition) {
      case 'partly-cloudy-day':
        return <Image 
          source={require('../../assets/images/partly-cloudy.png')}
          style={styles.icon}
        />
      case 'rain':
        return <Image 
          source={require('../../assets/images/rain.png')}
          style={styles.icon}
        />
      default:
        return;
    }
  };
  onPress = () => {
    const { navigation } = this.props;
    const currentWeather = navigation.getParam('foreCast')
    this.props.navigation.navigate('Data', {
      foreCast: currentWeather
    })
  };
  render() {
    const { navigation } = this.props;
    const currentWeather = navigation.getParam('foreCast').currently
    const weatherIcon = this.getWeatherIcon(currentWeather.icon)
    return (
      <View style={styles.container}>
        <Header style={styles.header}/>
          <View style={styles.currentWeatherContainer}>
            <View>
              {weatherIcon}
            </View>
            <View>
            <Text>Temperature: {currentWeather.temperature}°F</Text>
            <Text>Precipitation: {currentWeather.precipProbability}%</Text>
            <Text>Humidity: {currentWeather.humidity * 100}%</Text>
            <Text>Wind: {currentWeather.windSpeed}mph</Text>
          </View>
          </View>
          <TouchableOpacity onPress={this.onPress}>
            <Text>
              7-day Forecast
            </Text>
          </TouchableOpacity>
      </View>
    )
  }
};

export default index
