import React from 'react';
import { View, Text } from 'react-native';

export const NoData = (dataType) => {
  return (
    <View>
      <Text>No {dataType} data available.</Text>
    </View>
  )
}