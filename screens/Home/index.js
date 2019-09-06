import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Button, Dimensions } from 'react-native';
import { Header } from '../../components';
import { getWeatherIcon } from '../../utilities';
import { LineChart } from 'react-native-chart-kit';
import ProgressCircle from 'react-native-progress-circle';
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
    const soilData = mostRecentEnvDatum['attributes']
    const weatherIcon = getWeatherIcon(currentWeather.icon)
    const line = {
      labels: ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'],
      datasets: [{
          data: [72, 82, 95, 82, 88, 89, 94],
        }],
    };
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
              <Text style={styles.label}>Humidity: 
                <Text style={styles.bold}>
                  {Math.round(currentWeather.humidity * 100)}%
                </Text>
                </Text>
              <Text style={styles.label}>Wind: 
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
          <View style={styles.currentWidgets}>
          <View style={styles.currentSoilStatContainer}>
          <Text>Soil Moisture:</Text>
            <ProgressCircle
              percent={soilData.soil_moisture}
              radius={50}
              borderWidth={8}
              color="#228b22"
              shadowColor="#000"
              bgColor="#fff"
          >
              <Text>{soilData.soil_moisture}%</Text>
            </ProgressCircle>
          </View>
          <View style={styles.currentSoilStatContainer}>
          <Text>Soil Temperature:</Text>
            <ProgressCircle
              percent={soilData.soil_temperature}
              radius={50}
              borderWidth={8}
              color="#228b22"
              shadowColor="#000"
              bgColor="#fff"
          >
              <Text>{soilData.soil_temperature}°F</Text>
            </ProgressCircle>
          </View>
        </View>
            <Text>Recorded at: {soilData.created_at}</Text>
      </View>
    )
  }
};

export default index
