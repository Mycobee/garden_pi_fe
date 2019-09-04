import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import { Header, WeatherBox } from '../../components';
import styles from './styles';

export class index extends Component {
  getWeatherIcon = condition => {
    switch(condition) {
      case 'partly-cloudy-day':
        return <Image 
          source={require('../../assets/images/partly-cloudy.png')}
          style={styles.currentIcon}
        />
      case 'rain':
        return <Image 
          source={require('../../assets/images/rain.png')}
          style={styles.currentIcon}
        />
      case 'cloudy':
          return <Image 
          source={require('../../assets/images/cloudy.png')}
          style={styles.currentIcon}
        />
      case 'clear-day':
          return <Image 
          source={require('../../assets/images/sunny.png')}
          style={styles.currentIcon}
        />
        case 'snow':
            return <Image 
            source={require('../../assets/images/snow.png')}
            style={styles.currentIcon}
          />
        case 'wind':
            return <Image 
            source={require('../../assets/images/windy.png')}
            style={styles.currentIcon}
          />
        // case 'partly-cloudy-night':
        //     return <Image 
        //     source={require('../../assets/images/.png')}
        //     style={styles.currentIcon}
        //   />
        // case 'clear-night':
        //     return <Image 
        //     source={require('../../assets/images/.png')}
        //     style={styles.currentIcon}
        //   />
        // case 'fog':
        //     return <Image 
        //     source={require('../../assets/images/.png')}
        //     style={styles.currentIcon}
        //   />
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
            <Button title={'7-day forecast'} onPress={this.onPress} />
          </TouchableOpacity>
      </View>
    )
  }
};

export default index
