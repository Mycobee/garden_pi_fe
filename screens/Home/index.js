import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Button, Dimensions } from 'react-native';
import { Header, WeatherBox } from '../../components';
import { getWeatherIcon } from '../../utilities';
import { LineChart, ProgressChart } from 'react-native-chart-kit';
import styles from './styles';

export class index extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const env = navigation.getParam('env')
  }
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
    const envData = navigation.getParam('env').data
    const mostRecentEnvDatum = envData[envData.length - 1];
    const soilMoisture = mostRecentEnvDatum['attributes'].soil_moisture
    // const soilTemperature = mostRecentEnvDatum['attributes'].soil_temperature
    const weatherIcon = getWeatherIcon(currentWeather.icon)
    const line = {
      labels: ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'],
      datasets: [{
          data: [72, 82, 95, 82, 88, 89, 94],
        }],
    };
    const bar1 = {
      labels: ['0', 'Today', '100'],
        data: [0, soilMoisture, 100]
    };
    console.log(soilMoisture)
    return (
      <View style={styles.container}>
        <Header style={styles.header}/>
          <View style={styles.forecastContainer}>
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
                  {Math.round(currentWeather.humidity * 100)}%
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
            <Button title={'View 7-day forecast'} onPress={this.onPress} />
          </TouchableOpacity>
          </View>
          <View>
            <View style={styles.graphLabel}>
            <Text>Previous Week Soil Moisture</Text>
            </View>
            <LineChart 
              data={line}
              width={Dimensions.get('window').width * .95}
              height={220}
              withInnerLines={false}
              yAxisLabel={'% '}
              chartConfig={{
                backgroundColor: '#73A686',
                backgroundGradientFrom: '#73A686',
                backgroundGradientTo: '#73A686',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 30,
                }
              }}
              bezier
              style={{
                marginTop: 0,
                marginVertical: 8,
              }}
            />
          </View>
          <View>
            <Text>Soil Moisture:</Text>
            <ProgressChart 
              data={bar1}
              width={Dimensions.get('window').width * .5}
              height={220}
              chartConfig={{
                backgroundColor: '#73A686',
                backgroundGradientFrom: '#73A686',
                backgroundGradientTo: '#73A686',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 30,
                }
              }}
              style={{
                marginTop: 0,
                marginVertical: 8,
              }}
            />
          </View>
          <View>
            <Text>
              Soil Temperature:
            </Text>
          </View>
      </View>
    )
  }
};

export default index
