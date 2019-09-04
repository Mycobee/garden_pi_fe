import React, { Component } from 'react';
import { Header, WeatherBox } from '../../components';
import { View, ScrollView } from 'react-native';
import { getWeatherIcon } from '../../utilities';
import styles from './styles';

export class Data extends Component {
  render() {
    const { navigation } = this.props;
    const currentWeather = navigation.getParam('foreCast')
    const forecastBoxes = currentWeather.daily.data.map((datum, i) => {
      const dt = new Date(datum.time * 1000 - 6000)
      const shortenedTime = (dt.getMonth() + 1) + "/" + dt.getDate() + '/' + dt.getFullYear();
      const weatherIcon = getWeatherIcon(datum.icon)
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
