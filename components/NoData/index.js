import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export const NoData = ({ dataType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.noDataText}>No {dataType} Data Available.</Text>
    </View>
  )
}