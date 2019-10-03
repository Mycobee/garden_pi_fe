import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions, 
  ImageBackground,
  Image } from 'react-native';
import { 
  Header, 
  CurrentWeather, 
  DataCircle, 
  NoData } from '../../components';
import { getWeatherIcon, getRecordingTime, getRecordingDay } from '../../utilities';
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
      recentSoilData: [],
      averages: null,
      photos: null
    }
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const forecast = await navigation.getParam('foreCast')
    const env = await navigation.getParam('env').data
    const averages = await navigation.getParam('averages')
    const photos = await navigation.getParam('photos')
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
      recentSoilData: this.getRecentMoisture(moistureData),
      averages: averages,
      photos: photos
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
      env: this.state.env,
      averages: this.state.averages,
      photos: this.state.photos
    })
  };

  onBackPress = () => {
    this.props.navigation.navigate('Splash');
  };

  openCamera = () => {
    this.props.navigation.navigate('PhotoClicker');
  };

  onAddGarden = () => {
    this.props.navigation.navigate('AddGarden');
  };

  onWaterPress = async () => {
    triggerWaterJob()
    .then(res => res.json())
  }

  render() {
    const recordingTime = getRecordingTime(this.state.currentSoilData.created_at)
    const recordingDay = getRecordingDay(this.state.currentSoilData.created_at)
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
          <View style={[styles.infoContainer, {height: Dimensions.get('window').height * .23}]}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={this.onBackPress}>
                <Image  
                source={require('../../assets/images/logout.png')}
                style={[styles.backBtn, { marginRight: 25 }]}
                />
              </TouchableOpacity>
              <Header style={styles.header} fontsize={35}/>
              <TouchableOpacity onPress={this.openCamera}>
                <Image  
                  source={require('../../assets/images/camera.png')}
                  style={[styles.backBtn, { marginLeft: 25 }]}
                />
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity 
              style={styles.moreDataBtn}
              onPress={this.onAddGarden}
            >
            <Text>Add New Garden</Text>
            </TouchableOpacity> */}
            {
              this.state.currentWeather.temperature &&
              <View style={styles.forecastContainer}>
                <CurrentWeather 
                weatherIcon={weatherIcon} 
                temperature={this.state.currentWeather.temperature} 
                precipitaiton={this.state.currentWeather.precipProbability} 
                humidity={this.state.currentWeather.humidity} 
                wind={this.state.currentWeather.windSpeed}
                />
              </View>
            }
            {
              !this.state.currentWeather.temperature &&
              <NoData dataType='Weather' />
            }
          </View>
          <View style={[styles.infoContainer, {height: Dimensions.get('window').height * .31}]}>
            <View>
              {
                this.state.recentSoilData.length > 0 &&
                <View>
                  <Text style={styles.text}>Soil Moisture</Text>
                  <LineChart 
                  data={line}
                  width={Dimensions.get('window').width * .85}
                  height={Dimensions.get('window').height * .25}
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
              }
              {
                !this.state.recentSoilData.length &&
                <NoData dataType='Soil Moisture' />
              }
            </View>
          </View>
          <View style={[
            styles.infoContainer, 
            { height: Dimensions.get('window').height * .23 }
          ]}
          >
          {
            this.state.recentSoilData.length > 0 &&
            <View style={{ alignItems: 'center' }} >
              <Text style={styles.timeText}>
                {recordingDay}, {recordingTime}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <DataCircle 
                percent={this.state.currentSoilData.soil_moisture}
                title={'Soil Moisture:'}
                label={`${this.state.currentSoilData.soil_moisture}%`}
              />
                <DataCircle 
                  percent={this.state.currentSoilData.soil_temperature}
                  title={'Soil Temperature:'}
                  label={`${this.state.currentSoilData.soil_temperature}°F`}
                />
              </View>
            </View>
          }
          {
            !this.state.recentSoilData.length &&
            <NoData dataType='Soil' />
          }
        </View>
        <View 
          style={{ 
            flexDirection: 'row', 
            width: Dimensions.get('window').width * .9, 
            justifyContent: 'space-between'
          }}
        >
          <TouchableOpacity 
            style={styles.moreDataBtn} 
            onPress={this.onPress}
          >
            <Text>More Data</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.moreDataBtn}
            onPress={this.onWaterPress}
          >
            <Text>Water Garden</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )}
};

export default index
