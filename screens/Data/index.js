import React, { Component } from 'react';
import { Header, WeatherBox } from '../../components';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import { getWeatherIcon } from '../../utilities';
import { LineChart } from 'react-native-chart-kit';
import styles from './styles';

export class Data extends Component {
  render() {
    const { navigation } = this.props;
    const currentWeather = navigation.getParam('foreCast')
    const forecastBoxes = currentWeather.daily.data.map((datum, i) => {
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
    }
    const monthMoistureLine = {
      labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        data: [72, 82, 95, 82, 94]
      }]
    }
    const weekTempLine = {
      labels: ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'],
      datasets: [{
        data: [72, 82, 95, 82, 88, 89, 94]
      }]
    }
    const monthTempLine = {
      labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        data: [72, 82, 95, 82, 94]
      }]
    }
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.carouselScroll}>
          <ScrollView 
            style={styles.forecastContainer}
            horizontal 
            showsHorizontalScrollIndicator={false} 
            scrollEventThrottle={10} 
          >
            {forecastBoxes}
          </ScrollView>
        </View>
        <ScrollView style={styles.moistureGraphs}
          horizontal 
          showsHorizontalScrollIndicator={false} d
          scrollEventThrottle={10}
        >
        <View>
        <View style={styles.graphLabel}>
        <Text>Soil Moisture Weekly</Text>
        </View>
          <LineChart 
            data={weekMoistureLine}
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
        <View style={styles.graphLabel}>
        <Text>Soil Moisture Monthly</Text>
        </View>
          <LineChart 
            data={monthMoistureLine}
            width={Dimensions.get('window').width * .95}
            height={220}
            withInnerLines={false}
            yAxisLabel={'°F '}
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
        </ScrollView>
        <ScrollView style={styles.moistureGraphs}
          horizontal 
          showsHorizontalScrollIndicator={false} 
          scrollEventThrottle={10}
        >
        <View>
        <View style={styles.graphLabel}>
        <Text>Soil Temp Weekly</Text>
        </View>
          <LineChart 
            data={weekTempLine}
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
        <View style={styles.graphLabel}>
        <Text>Soil Temp Monthly</Text>
        </View>
          <LineChart 
            data={monthTempLine}
            width={Dimensions.get('window').width * .95}
            height={220}
            withInnerLines={false}
            yAxisLabel={'°F '}
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
        </ScrollView>
      </View>
    )
  }
}

export default Data
