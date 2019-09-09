import React from 'react';
import { View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import styles from './Style';

const DataCircle = ({ percent, title, label }) => {
  return (
    <View style={styles.currentSoilStatContainer}>
      <Text>{title}</Text>
      <ProgressCircle
        percent={percent}
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

export { DataCircle };
