import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Button, 
  Dimensions, 
  ImageBackground,
  Image } from 'react-native';
import { Header, CurrentWeather, DataCircle } from '../../components';
import { getWeatherIcon, getRecordingTime } from '../../utilities';
import { triggerWaterJob } from '../../Api/ApiCalls';
import { LineChart } from 'react-native-chart-kit';
import styles from './styles';

export class index extends Component {
  constructor() {
    super()
    this.state = {
      env: {},
      currentWeather: {},
      forecast: {},
      currentSoilData: {},
      recentSoilData: []
    }
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const forecast = await navigation.getParam('foreCast')
    const env = await navigation.getParam('env').data
    const mostRecentEnvData = env[env.length - 1];
    const moistureData = env.map(soil => {
      return soil['attributes']
    });
    const currentSoilData = mostRecentEnvData['attributes'];
    this.setState({
      env: env,
      forecast: forecast['daily'].data,
      currentWeather: forecast.currently,
      currentSoilData: currentSoilData,
      recentSoilData: this.getRecentMoisture(moistureData)
    });
  };

  getRecentMoisture = moistureData => {
    let recentMoisture = []
    for(i = moistureData.length -5; i < moistureData.length; i++){
      let moistureTime = {
        created_at: getRecordingTime(moistureData[i].created_at),
        soil_moisture: moistureData[i].soil_moisture,
        soil_temperature: moistureData[i].soil_temperature
      }
      recentMoisture.push(moistureTime)
    }
    return recentMoisture 
  };

  onPress = () => {
    this.props.navigation.navigate('Data', {
      forecast: this.state.forecast,
      env: this.state.env
    })
  };

  onBackPress = () => {
    this.props.navigation.navigate('Splash')
  };

  onWaterPress = async () => {
    triggerWaterJob()
    .then(res => res.json())
  }

  render() {
    const recordingTime = getRecordingTime(this.state.currentSoilData.created_at)
    const weatherIcon = getWeatherIcon(this.state.currentWeather.icon)
    const line = {
      labels: this.state.recentSoilData.map(time => time.created_at),
      datasets: [{
          data: this.state.recentSoilData.map(moisture => moisture.soil_moisture)
        }],
    };
    return (
      <View>
          <ImageBackground
          source={require('../../assets/images/pottedPlants.jpg')}
          style={styles.screenContainer}
          onLoad={this.toggleBackgroundLoaded}
          >
          <View style={styles.infoContainer}>
            <View style={styles.headerContainer}>
              <Header style={styles.header} fontsize={45}/>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity 
                style={styles.moreDataBtn} 
                onPress={this.onPress}
              >
                <Text>View More Data</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.moreDataBtn} 
              >
                <Text>Make New Note</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.forecastContainer}>
              <CurrentWeather 
                weatherIcon={weatherIcon} 
                temperature={this.state.currentWeather.temperature} 
                precipitaiton={this.state.currentWeather.precipProbability} 
                humidity={this.state.currentWeather.humidity} 
                wind={this.state.currentWeather.windSpeed}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View>
              <View>
              <Text style={styles.text}>Soil Moisture</Text>
              </View>
              <LineChart 
                data={line}
                width={Dimensions.get('window').width * .85}
                height={210}
                withInnerLines={false}
                yAxisLabel={'% '}
                chartConfig={{
                  backgroundColor: '#d5fdd5',
                  backgroundGradientFrom: '#d5fdd5',
                  backgroundGradientTo: '#d5fdd5',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  strokeWidth: 2, // optional, default 3
                }}
                bezier
                style={{
                  marginTop: 0,
                  marginVertical: 8,
                  borderColor: '#A14550',
                  borderRadius: 30,
                  borderWidth: 2,
                }}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
          <Text style={styles.timeText}>Last Recording  {recordingTime}
          </Text>
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
        </View>
        <TouchableOpacity 
          style={styles.waterGardenBtn}
          onPress={this.onWaterPress}
        >
          <Text>
            Water your Garden
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )}
};

export default index
