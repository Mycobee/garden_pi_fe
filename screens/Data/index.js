import React, { Component } from 'react';
import { Header, WeatherBox } from '../../components';
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
  constructor() {
    super()
    this.state = {
      env: {},
      forecast: []
    }
  };

  scrollX = new Animated.Value(0)

  async componentDidMount() {
    const { navigation } = this.props;
    const forecast = await navigation.getParam('forecast');
    const env = await navigation.getParam('env')
    this.setState({
      forecast: forecast,
      env: env
    })
    getDailyAverages(this.state.env)
  };

  onBackPress = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    let position = Animated.divide(this.scrollX, width);
    
    const forecastBoxes = this.state.forecast.map((datum, i) => {
      const dt = new Date(datum.time * 1000 - 6000)
      const shortenedTime = (dt.getMonth() + 1) + "/" + dt.getDate() + '/' + dt.getFullYear();
      const weatherIcon = getWeatherIcon(datum.icon)
      return <WeatherBox 
        summary={datum.summary} 
        highTemp={datum.temperatureHigh} 
        lowTemp={datum.temperatureLow} 
        time={shortenedTime}
        icon={weatherIcon}
        key={i} 
      />
    });
    const dots = this.state.forecast.map((_, i) => {
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
    })
    const weekMoistureLine = {
      labels: ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'],
      datasets: [{
        data: [72, 82, 95, 82, 88, 89, 94]
      }]
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
          <TouchableOpacity onPress={this.onBackPress}>
            <Image  
              source={require('../../assets/images/back.png')}
              style={styles.backBtn}
            />
          </TouchableOpacity>
          <Header style={styles.header} fontsize={45}/>
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
          {forecastBoxes}
        </ScrollView>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {dots}
      </View>
      </View>
      <View style={styles.infoContainer}>
      <Text style={styles.text}>Weekly Soil Moisture</Text>
        <LineChart 
          data={weekMoistureLine}
          width={Dimensions.get('window').width * .87}
          height={220}
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
        </View>
    </ImageBackground>
    </View>
    )
  }
}

export default Data;
