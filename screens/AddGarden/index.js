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
import { Header } from '../../components';

export class AddGarden extends Component {
  constructor() {
    super()
  }

  onBackPress = () => {
    this.props.navigation.navigate('Home')
  };

  openCamera = () => {
    this.props.navigation.navigate('PhotoClicker')
  };

  render() {
    return (
      <View>
      <ImageBackground
        source={require('../../assets/images/pottedPlants.jpg')}
        style={styles.screenContainer}
        onLoad={this.toggleBackgroundLoaded}
      >
      <View style={[styles.infoContainer, {height: Dimensions.get('window').height * .08}]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={this.onBackPress}>
          <Image  
            source={require('../../assets/images/back.png')}
            style={[styles.backBtn, { marginRight: 10 }]}
          />
        </TouchableOpacity>
          <Header style={styles.header} fontsize={35}/>
        <TouchableOpacity onPress={this.openCamera}>
          <Image  
            source={require('../../assets/images/camera.png')}
            style={[styles.backBtn, { marginLeft: 10 }]}
          />
        </TouchableOpacity>
      </View>
      </View>
      </ImageBackground>
      </View>
    )
  }
}

export default AddGarden;