import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, WeatherBox } from '../../components';
import styles from './styles';

export class index extends Component {
  render() {
    const { navigation } = this.props;
    const currentWeather = navigation.getParam('foreCast')
    const forecastBoxes = currentWeather.daily.data.map((datum, i) => {
      // console.log(datum)
      const dt = new Date(datum.time * 1000 - 6000)
      const shortenedTime = (dt.getMonth() + 1) + "/" + dt.getDate() + '/' + dt.getFullYear();
      return <WeatherBox 
        summary={datum.summary} 
        highTemp={datum.temperatureHigh} 
        lowTemp={datum.temperatureLow} 
        time={shortenedTime}
        key={i} 
      />
    });
    return (
      <View style={styles.container}>
        <Header style={styles.header}/>
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
};

export default index
