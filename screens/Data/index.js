import React, { Component } from 'react';
import { Header, WeatherBox } from '../../components';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export class Data extends Component {
  getWeatherIcon = condition => {
    switch(condition) {
      case 'Partly cloudy throughout the day.':
        return <Image 
          source={require('../../assets/images/cloudy.png')}
        />
      case 'Mostly cloudy throughout the day.':
        return <Image 
          source={require('../../assets/images/cloudy-3.png')}
        />
      case 'Possible light rain in the evening.':
        return <Image 
          source={require('../../assets/images/rainy-2.png')}
        />
      case 'Foggy in the morning.':
        return <Image 
          source={require('../../assets/images/foggy.png')}
        />
      default:
        return;

    }
  }
  render() {
    const { navigation } = this.props;
    const currentWeather = navigation.getParam('foreCast')
    console.log(currentWeather)
    const forecastBoxes = currentWeather.daily.data.map((datum, i) => {
      // console.log(datum)
      const dt = new Date(datum.time * 1000 - 6000)
      const shortenedTime = (dt.getMonth() + 1) + "/" + dt.getDate() + '/' + dt.getFullYear();
      const weatherIcon = this.getWeatherIcon(datum.summary)
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
