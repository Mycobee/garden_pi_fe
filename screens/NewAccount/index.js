import React, { Component } from 'react';
import { 
  View, 
  TouchableOpacity, 
  TextInput,
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
          <Header fontsize={45}/>
          <TextInput 
            style={styles.formInput}
            placeholder="First Name..."
            maxLength={20}
          />
          <TextInput 
            style={styles.formInput}
            placeholder="Last Name..."
            maxLength={20}
          />
          <TextInput 
            style={styles.formInput}
            placeholder="Email Address..."
          />
          <TextInput 
            style={styles.formInput}
            placeholder="Password..."
            maxLength={20}
            secureTextEntry={true}
            secureTextEntry
            autoCorrect={false}
          />
          <TextInput 
            style={styles.formInput}
            placeholder="Confirm Password..."
            maxLength={20}
            secureTextEntry
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.formInput}>
            <Text style={{ fontWeight: 'bold' }}>Create Account!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
};