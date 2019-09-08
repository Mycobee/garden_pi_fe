import React from 'react';
import { View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { StyleSheet } from 'react-native';

const DataCircle = ({ data, title, label }) => {
  return (
    <View style={styles.currentSoilStatContainer}>
      <Text>{title}</Text>
      <ProgressCircle
        percent={data}
        radius={50}
        borderWidth={8}
        color="#228b22"
        shadowColor="#000"
        bgColor="#fff"
      >
        <Text>{label}</Text>
      </ProgressCircle>
    </View>
  )
}

const styles = StyleSheet.create({
  currentSoilStatContainer: {
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'space-between',
    margin: 3,
    padding: 10,
    width: 170
  }
})

export { DataCircle };
