import React, { Component } from 'react';
import { Header, WeatherBox } from '../../components';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export class Data extends Component {
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
  }
  render() {
    const { navigation } = this.props;
    const currentWeather = navigation.getParam('foreCast')
    const forecastBoxes = currentWeather.daily.data.map((datum, i) => {
      const dt = new Date(datum.time * 1000 - 6000)
      const shortenedTime = (dt.getMonth() + 1) + "/" + dt.getDate() + '/' + dt.getFullYear();
      const weatherIcon = this.getWeatherIcon(datum.icon)
      return <WeatherBox 
        summary={datum.summary} 
        highTemp={datum.temperatureHigh} 
        lowTemp={datum.temperatureLow} 
        time={shortenedTime}
        icon={weatherIcon}
        key={i} 
      />
    });
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.carouselScroll}>
          <ScrollView 
            style={styles.forecastContainer}
            horizontal 
            showsHorizontalScrollIndicator={false} 
            scrollEventThrottle={10} 
          >
            {forecastBoxes}
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default Data
