import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.splashHeader}>Welcome to GardenPi</Text>
        <Image 
            source={require('../../assets/images/sprout.png')}
            style={styles.plantIcon} />
        <TouchableOpacity style={styles.splashEnterBtn}>
          <Text>
            Enter your Garden...
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}