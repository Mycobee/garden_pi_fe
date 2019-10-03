import React, { Component } from 'react';
import { Header, WeatherBox, NoData } from '../../components';
import { 
  View, 
  ScrollView, 
  Text, 
  Dimensions, 
  TouchableOpacity, 
  Image,
  ImageBackground,
  Animated } from 'react-native';
import { getWeatherIcon, getDailyAverages } from '../../utilities';
import { LineChart } from 'react-native-chart-kit';
import styles from './styles';

const { width } = Dimensions.get('window');

export class Data extends Component {
  constructor(props) {
    super(props)
    this.state = {
      env: {},
      forecast: [],
      recentAvgDays: [],
      recentAvg: [],
      finalDays: [],
      photoUrl: '',
      pageLoaded: false
    }
  };

  scrollX = new Animated.Value(0)

  async componentDidMount() {
    const { navigation } = this.props;
    const forecast = await navigation.getParam('forecast');
    const env = await navigation.getParam('env');
    const averages = await navigation.getParam('averages');
    const photo = await navigation.getParam('photos')
    const averageDays = Object.keys(averages.data.attributes)
    const days = averageDays.map((day) => {
      let ave = day.split(' ')[0]     
      return ave.split('-').reverse().splice(0,2).reverse().join('/')
      })
    const averageData = Object.values(averages.data.attributes)
    this.setState({
      forecast: forecast,
      env: env,
      recentAvgDays: days,
      recentAvg: averageData,
      photoUrl: photo,
      pageLoaded: true
    })
    getDailyAverages(this.state.env)
  };
  
  onBackPress = () => {
    this.props.navigation.navigate('Home');
  };
  
  openCamera = () => {
    this.props.navigation.navigate('PhotoClicker')
  };

  openCameraRoll = () => {
    this.props.navigation.navigate('PhotoPicker')
  };

  displayForecastBoxes = () => {
    return this.state.forecast.map((datum, i) => {
      const dt = new Date(datum.time * 1000 - 6000)
      const shortenedTime = (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear();
      const weatherIcon = getWeatherIcon(datum.icon)
      return (
        <WeatherBox 
          summary={datum.summary} 
          highTemp={datum.temperatureHigh} 
          lowTemp={datum.temperatureLow} 
          time={shortenedTime}
          icon={weatherIcon}
          key={i} 
        />
      )
    });
  };

  displayDots = () => {
    let position = Animated.divide(this.scrollX, width);
    return this.state.forecast.map((_, i) => {
      let opacity = position.interpolate({
        inputRange: [i - 0.50000000001, i - 0.5, i, i + 0.5, i + 0.50000000001],
        outputRange: [0.3, 1, 1, 1, 0.3],
        extrapolate: 'clamp'
      });
      return (
        <Animated.View
          key={i}
          style={{ opacity, height: 10, width: 10, backgroundColor: 'black', margin: 8, borderRadius: 5 }}
        />
      )
    });
  };

  render() {
    const weekMoistureLine = {
      labels: this.state.recentAvgDays.map(day => day),
      datasets: [{
        data: this.state.recentAvg
      }]
    };
    return (
      <View>
        <ImageBackground
          source={require('../../assets/images/pottedPlants.jpg')}
          style={styles.screenContainer}
          onLoad={this.toggleBackgroundLoaded}
        >
      <View style={[styles.infoContainer, { height: Dimensions.get('window').height * .275 }]}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={this.onBackPress}>
            <Image  
              source={require('../../assets/images/logout.png')}
              style={styles.backBtn}
            />
          </TouchableOpacity>
          <Header style={styles.header} fontsize={35}/>
            <TouchableOpacity onPress={this.openCamera}>
              <Image  
                source={require('../../assets/images/camera.png')}
                style={styles.backBtn}
              />
            </TouchableOpacity>
        </View>
        <View style={styles.carouselScroll}>
          <ScrollView 
            style={styles.forecastContainer}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            horizontal 
            scrollEventThrottle={16} 
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.scrollX } } }]
            )}
          >
            {
              this.state.forecast && this.state.pageLoaded ? 
              this.displayForecastBoxes() : 
              <NoData dataType='Weather' />
            }
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'row' }}>
          { 
            this.state.forecast && this.state.pageLoaded ? 
            this.displayDots() : 
            null
          }
        </View>
      </View>
      <View style={[styles.infoContainer, { height: Dimensions.get('window').height * .295, padding: 5 }]}>
        {
          this.state.recentAvg.length && this.state.pageLoaded ? 
          <View>
            <Text style={styles.text}>Soil Moisture Avg By Day</Text>
              <LineChart 
                data={weekMoistureLine}
                width={Dimensions.get('window').width * .87}
                height={Dimensions.get('window').height * .24}
                withInnerLines={false}
                yAxisLabel={'% '}
                chartConfig={{
                  backgroundColor: '#d5fdd5',
                  backgroundGradientFrom: '#d5fdd5',
                  backgroundGradientTo: '#d5fdd5',
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
                  borderColor: '#A14550',
                  borderRadius: 30,
                  borderWidth: 2,
                }}
              />
          </View> :
          <NoData dataType='Soil' />
        }
        </View>
        <View style={styles.infoContainer}>
          {
            this.state.photoUrl && this.state.pageLoaded  ? 
            <View>
              <Text style={styles.text}>
                Most Recent Garden Photo
              </Text>
              <Image 
                source={{url: this.state.photoUrl}} 
                style={{
                  height: Dimensions.get('window').height * .25, 
                  width: Dimensions.get('window').width * .95, 
                  resizeMode: 'contain'
                }}
              />
            </View> :
            <NoData dataType='Photo' />
          }
        </View>
      </ImageBackground>
    </View>
    )
  }
}

export default Data;
