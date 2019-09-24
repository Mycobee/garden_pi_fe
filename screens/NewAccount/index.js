import React, { Component } from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  ImageBackground, 
  Image } from 'react-native';
import { Header } from '../../components';
import styles from './styles';

export default class Splash extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  render() {
    return (
      <ImageBackground 
        source={require('../../assets/images/splash-background.jpg')}
        style={styles.container}
      >
        <View style={styles.infoContainer}>
          <Header fontsize={55}/>
        </View>
      </ImageBackground>
    )
  }
};