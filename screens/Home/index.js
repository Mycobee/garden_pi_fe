import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, WeatherBox } from '../../components';
import styles from './styles';

export class index extends Component {
  render() {
    const { navigation } = this.props;
    const currentWeather = navigation.getParam('foreCast')
    const forecastBoxes = currentWeather.daily.data.map(datum => {
      return <WeatherBox summary={datum.summary}/>
    })
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.forecastContainer}>
          {forecastBoxes}
        </View>
      </View>
    )
  }
}

export default index
