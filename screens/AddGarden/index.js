import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Button, 
  Dimensions, 
  ImageBackground,
  Image } from 'react-native';
import styles from './styles';

export class AddGarden extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View>
      <ImageBackground
        source={require('../../assets/images/pottedPlants.jpg')}
        style={styles.screenContainer}
        onLoad={this.toggleBackgroundLoaded}
      >

      </ImageBackground>
      </View>
    )
  }
}

export default AddGarden;