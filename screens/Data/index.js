import React, { Component } from 'react';
import { Header, WeatherBox } from '../../components';
import { 
  View, 
  ScrollView, 
  Text, 
  Dimensions, 
  TouchableOpacity, 
  Image,
  ImageBackground } from 'react-native';
import { getWeatherIcon } from '../../utilities';
import { LineChart } from 'react-native-chart-kit';
import styles from './styles';

export class Data extends Component {
  constructor() {
    super()
    this.state = {
      forecast: []
    }
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const forecast = await navigation.getParam('forecast');
    this.setState({
      forecast: forecast
    })
  };

  onBackPress = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
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
    const weekMoistureLine = {
      labels: ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'],
      datasets: [{
        data: [72, 82, 95, 82, 88, 89, 94]
      }]
    };
    const monthMoistureLine = {
      labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        data: [72, 82, 95, 82, 94]
      }]
    };
    const weekTempLine = {
      labels: ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'],
      datasets: [{
        data: [72, 82, 95, 82, 88, 89, 94]
      }]
    };
    const monthTempLine = {
      labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        data: [72, 82, 95, 82, 94]
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
          horizontal 
          scrollEventThrottle={10} 
        >
          {forecastBoxes}
        </ScrollView>
      </View>
      </View>
      <View style={styles.infoContainer}>
      <ScrollView 
        style={styles.moistureGraphs}
        horizontal
        showsHorizontalScrollIndicator={true} 
        scrollEventThrottle={10}
      >
      <View>
      <View>
      <Text style={styles.text}>Soil Moisture Weekly</Text>
      </View>
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
      <View>
      <View>
      <Text style={styles.text}>Soil Moisture Monthly</Text>
      </View>
        <LineChart 
          data={monthMoistureLine}
          width={Dimensions.get('window').width * .87}
          height={220}
          withInnerLines={false}
          yAxisLabel={'°F '}
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
      </ScrollView>
      </View>
      <View style={styles.infoContainer}>
      <ScrollView style={styles.moistureGraphs}
        horizontal 
        showsHorizontalScrollIndicator={false} 
        scrollEventThrottle={10}
      >
      <View>
      <View>
      <Text style={styles.text}>Soil Temp Weekly</Text>
      </View>
        <LineChart 
          data={weekTempLine}
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
      <View>
      <View>
      <Text style={styles.text}>Soil Temp Monthly</Text>
      </View>
        <LineChart 
          data={monthTempLine}
          width={Dimensions.get('window').width * .87}
          height={220}
          withInnerLines={false}
          yAxisLabel={'°F '}
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
      </ScrollView>
      </View>
    </ImageBackground>
    </View>
    )
  }
}

export default Data
