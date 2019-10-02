import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

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
        <Text style={styles.currentWeatherTemp}> 
          {Math.round(temperature)}°F
        </Text>
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
    );
  };

export { CurrentWeather };