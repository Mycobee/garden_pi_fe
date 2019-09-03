import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WeatherBox = ({ summary }) => (
  <View>
    <Text>{summary}</Text>
  </View>
)

const styles = StyleSheet.create({

})

export { WeatherBox };