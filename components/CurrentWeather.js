import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


const CurrentWeather = ({ 
  weatherIcon, 
  temperature, 
  precipitaiton, 
  humidity, 
  wind 
  }) => {
    return (
      <View style={styles.currentWeatherContainer}>
      <View>
        {weatherIcon}
      </View>
      <View>
        <Text style={styles.currentWeatherTemp}> {Math.round(temperature)}°F</Text>
      </View>
      <View>
        <Text style={styles.label}>Chance of Rain: 
            <Text style={styles.bold}>
                {precipitaiton}%
            </Text>
        </Text>
        <Text style={styles.label}>Humidity: 
          <Text style={styles.bold}>
            {Math.round(humidity * 100)}%
          </Text>
          </Text>
          <Text style={styles.label}>Wind: 
            <Text style={styles.bold}>
              {Math.round(wind)} mph
            </Text>
          </Text>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
  currentWeatherContainer: {
    alignItems: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 20,
    width: Dimensions.get('window').width * .85,
  },
  currentWeatherTemp: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  icon: {
    width: 200,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bold: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 13,
    marginTop: 5,
  },
})

export { CurrentWeather };