import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WeatherBox = ({ summary, highTemp, lowTemp, time, icon }) => (
  <View style={styles.widget}>
      <Text style={styles.bold}>{time}</Text>
    <View style={styles.icon}>
      {icon}
      <Text style={styles.summary}>{summary}</Text>
    </View>
    <View style={styles.statsContainer}>
      <Text style={styles.bold}>
        {Math.round(highTemp)}°F / {Math.round(lowTemp)}°F
      </Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  widget: {
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'space-between',
    margin: 3,
    padding: 10,
    width: 200
  },
  summary: {
    width: 90,
  },
  icon: {
    width: 180,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bold: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export { WeatherBox };