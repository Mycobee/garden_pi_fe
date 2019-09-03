import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { Header, WeatherBox } from '../../components';
import styles from './styles';

export class index extends Component {
  onPress = () => {
    const { navigation } = this.props;
    const currentWeather = navigation.getParam('foreCast')
    this.props.navigation.navigate('Data', {
      foreCast: currentWeather
    })
  }
  render() {
    const { navigation } = this.props;
    const currentWeather = navigation.getParam('foreCast')
    return (
      <View style={styles.container}>
        <Header style={styles.header}/>
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
