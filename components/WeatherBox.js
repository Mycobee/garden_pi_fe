import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WeatherBox = ({ summary, highTemp, lowTemp, time, icon }) => (
  <View style={styles.widget}>
    <View style={styles.textContainer}>
      <Text>{time}</Text>
      <Text>High: {highTemp}</Text>
      <Text>Low: {lowTemp}</Text>
      <Text style={styles.summary}>{summary}</Text>
    </View>
    <View style={styles.icon}>
      {icon}
    </View>
  </View>
)

const styles = StyleSheet.create({
  widget: {
    padding: 0,
  },
  summary: {
    width: 125,
    marginTop: 5
  },
  textContainer: {
    height: 115
  },
  icon: {
    width: 70,
    height: 70,
  }
})

export { WeatherBox };