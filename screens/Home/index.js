import React, { Component } from 'react';
import { 
  View,
  Image, 
  Text, 
  TouchableOpacity,
  Button } from 'react-native';
import { Header, WeatherBox } from '../../components';
import { getWeatherIcon } from '../../utilities';
import styles from './styles';

export class index extends Component {
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
    const weatherIcon = getWeatherIcon(currentWeather.icon)
    return (
      <View style={styles.container}>
        <Header style={styles.header}/>
          <View style={styles.currentWeatherContainer}>
            <View>
              {weatherIcon}
            </View>
            <View>
              <Text style={styles.currentWeatherTemp}> {Math.round(currentWeather.temperature)}°F</Text>
              </View>
              <View>
              <Text style={styles.label}>Chance of Rain: 
                  <Text style={styles.bold}>
                      {currentWeather.precipProbability}%
                  </Text>
              </Text>
              <Text>Humidity: 
                <Text style={styles.bold}>
                  {currentWeather.humidity * 100}%
                </Text>
                </Text>
              <Text>Wind: 
                <Text style={styles.bold}>
                  {Math.round(currentWeather.windSpeed)} mph
                </Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={this.onPress}>
            <Button title={'7-day forecast'} onPress={this.onPress} />
          </TouchableOpacity>
      </View>
    )
  }
};

export default index
