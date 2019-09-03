import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WeatherBox = ({ summary, highTemp, lowTemp, time }) => (
  <View style={styles.widget}>
    <Text>{time}</Text>
    <Text>High: {highTemp}</Text>
    <Text>Low: {lowTemp}</Text>
    <Text>{summary}</Text>
  </View>
)

const styles = StyleSheet.create({
  widget: {
    padding: 5,
    justifyContent: 'center',
    margin: 10
  }
})

export { WeatherBox };