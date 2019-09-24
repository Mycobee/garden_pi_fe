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

  onSubmit = (e) => {
    // console.log(this.state)
  }

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
            onChangeText={(text) => this.setState({ firstName: text })}
          />
          <TextInput           
            style={styles.formInput}
            placeholder="Last Name..."
            maxLength={20}
            onChangeText={(text) => this.setState({ lastName: text })}
          />
          <TextInput 
            style={styles.formInput}
            placeholder="Email Address..."
            onChangeText={(text) => this.setState({ email: text })}
          />
          <TextInput 
            style={styles.formInput}
            placeholder="Password..."
            maxLength={20}
            secureTextEntry={true}
            secureTextEntry
            autoCorrect={false}
            onChangeText={(text) => this.setState({ password: text })}
          />
          <TextInput 
            style={styles.formInput}
            placeholder="Confirm Password..."
            maxLength={20}
            secureTextEntry
            autoCorrect={false}
            onChangeText={(text) => this.setState({ passwordConfirmation: text })}
          />
          <TouchableOpacity style={styles.formInput} onPress={this.onSubmit}>
            <Text style={{ fontWeight: 'bold' }}>Create Account!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
};