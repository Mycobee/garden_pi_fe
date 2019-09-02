import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import { Header } from '../../components';
import styles from './styles';

export default class Splash extends Component {
  onEnterPress = () => {
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.textContainer}>
          <Text style={styles.splashHeader}>Welcome!</Text>
          <Image 
              source={require('../../assets/images/sprout.png')}
              style={styles.plantIcon} />
          <TouchableOpacity 
            style={styles.splashEnterBtn}
            onPress={this.onEnterPress}
          >
            <Text>
              Enter your Garden...
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}