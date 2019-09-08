import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Button, 
  Dimensions, 
  ImageBackground } from 'react-native';
import { Header, CurrentWeather, DataCircle } from '../../components';
import { getWeatherIcon, getRecordingTime } from '../../utilities';
import { LineChart } from 'react-native-chart-kit';
import styles from './styles';

export class index extends Component {
  constructor() {
    super()
    this.state = {
      env: {},
      currentWeather: {},
      forecast: {},
      currentSoilData: {}
    }
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const forecast = await navigation.getParam('foreCast')
    const env = await navigation.getParam('env').data
    const mostRecentEnvData = env[env.length - 1];
    const currentSoilData = mostRecentEnvData['attributes'];
    this.setState({
      env: env,
      forecast: forecast['daily'].data,
      currentWeather: forecast.currently,
      currentSoilData: currentSoilData
    })
  };

  onPress = () => {
    this.props.navigation.navigate('Data', {
      forecast: this.state.forecast
    })
  };

  render() {
    const recordingTime = getRecordingTime(this.state.currentSoilData.created_at)
    const weatherIcon = getWeatherIcon(this.state.currentWeather.icon)
    const line = {
      labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
      datasets: [{
          data: [72, 82, 95, 82, 88, 89],
        }],
    };
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
                temperature={this.state.currentWeather.temperature} 
                precipitaiton={this.state.currentWeather.precipProbability} 
                humidity={this.state.currentWeather.humidity} 
                wind={this.state.currentWeather.windSpeed}
              />
                <TouchableOpacity onPress={this.onPress}>
                  <Button title={'View 7-day forecast'} onPress={this.onPress} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.graphLabel}>
                <Text style={styles.text}>Soil Moisture (Last 6 Hours)</Text>
                </View>
                <LineChart 
                  data={line}
                  width={Dimensions.get('window').width * .85}
                  height={160}
                  withInnerLines={false}
                  yAxisLabel={'% '}
                  chartConfig={{
                    backgroundGradientFrom: 'rgba(115, 166, 134, 1)',
                    backgroundGradientTo: 'rgba(115, 166, 134, 1)',
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
                {
                  this.state.currentSoilData.soil_moisture &&
                  <DataCircle 
                    percent={this.state.currentSoilData.soil_moisture}
                    title={'Soil Moisture:'}
                    label={`${this.state.currentSoilData.soil_moisture}%`}
                  />
                }
                {
                  this.state.currentSoilData.soil_temperature &&
                  <DataCircle 
                    percent={this.state.currentSoilData.soil_temperature}
                    title={'Soil Temperature:'}
                    label={`${this.state.currentSoilData.soil_temperature}°F`}
                  />
                }
              </View>
            <Text>Time Recorded: {recordingTime}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
};

export default index
