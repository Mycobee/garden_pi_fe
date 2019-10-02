import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const WeatherBox = ({ summary, highTemp, lowTemp, time, icon }) => (
  <View style={styles.widget}>
      <Text style={styles.bold}>{time}</Text>
    <View style={styles.statsContainer}>
      {icon}
      <Text style={styles.temp}>
        {Math.round(highTemp)}°F / {Math.round(lowTemp)}°F
      </Text>
    </View>
      <Text style={styles.summary}>{summary}</Text>
  </View>
);

export { WeatherBox };