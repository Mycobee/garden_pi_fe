import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Button, Dimensions, ImageBackground } from 'react-native';
import { Header, CurrentWeather } from '../../components';
import { getWeatherIcon } from '../../utilities';
import { LineChart } from 'react-native-chart-kit';
import ProgressCircle from 'react-native-progress-circle';
import styles from './styles';

export class index extends Component {
  constructor() {
    super()
    this.state = {
      env: {},
      forecast: {}
    }
  };
  async componentDidMount() {
    const { navigation } = this.props;
    const forecast = await navigation.getParam('foreCast')
    const env = await navigation.getParam('env')
    this.setState({
      env: env,
      forecast: forecast
    })
  };

  onPress = () => {
    this.props.navigation.navigate('Data', {
      forecast: this.state.forecast['daily'].data
    })
  };

  render() {
    console.log(this.state.forecast.currently)
    const { navigation } = this.props;
    const currentWeather = navigation.getParam('foreCast').currently
    const envData = navigation.getParam('env').data
    const mostRecentEnvDatum = envData[envData.length - 1];
    const soilData = mostRecentEnvDatum['attributes']
    const date = new Date(soilData.created_at)
    const hourRecorded = date.getHours();
    const minuteRecorded = date.getMinutes().toString();
    const formatMinute = () => {
      return minuteRecorded.length == 1 
        ? `0${date.getMinutes()}` 
        : `${date.getMinutes()}`
    }
      
    const timeRecorded = `${hourRecorded}:${formatMinute()}`;
    const weatherIcon = getWeatherIcon(currentWeather.icon)
    const line = {
      labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
      datasets: [{
          data: [72, 82, 95, 82, 88, 89],
        }],
    };
    const loadingScreen = (
      <View style={{ 
          alignItems: 'center', 
          justifyContent: 'center',
          height: Dimensions.get('window').height
        }}
      >
        <Text style={{ margin: 'auto' }}>Aye</Text>
      </View>
    )
    return (
      <View>
          <ImageBackground
          source={require('../../assets/images/lettuce.jpg')}
          style={styles.screenContainer}
          onLoad={this.toggleBackgroundLoaded}
          >
          <View style={styles.infoContainer}>
          <Header style={styles.header}/>
              <View style={styles.forecastContainer}>
                <CurrentWeather 
                  weatherIcon={weatherIcon} 
                  temperature={currentWeather.temperature} 
                  precipitaiton={currentWeather.precipProbability} 
                  humidity={currentWeather.humidity} 
                  wind={currentWeather.windSpeed}
                />
                <TouchableOpacity onPress={this.onPress}>
                  <Button title={'View 7-day forecast'} onPress={this.onPress} />
                </TouchableOpacity>
                </View>
              </View>
              <View style={styles.infoContainer}>
                <View>
                  <View style={styles.graphLabel}>
                  <Text>Soil Moisture (Last 6 Hours)</Text>
                  </View>
                  <LineChart 
                    data={line}
                    width={Dimensions.get('window').width * .85}
                    height={220}
                    withInnerLines={false}
                    yAxisLabel={'% '}
                    chartConfig={{
                      backgroundGradientFrom: '#1E2923',
                      backgroundGradientTo: '#08130D',
                      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                      strokeWidth: 2, // optional, default 3
                    }}
                    bezier
                    style={{
                      marginTop: 0,
                      marginVertical: 8,
                    }}
                  />
                </View>
              </View>
              <View style={styles.infoContainer}>
                <View style={{ flexDirection: 'row' }}>
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
              <Text>Time Recorded: {timeRecorded}</Text>
            </View>
        </ImageBackground>
      </View>
    )
  }
};

export default index
