import React, { Component } from 'react';
import { 
  View, 
  TouchableOpacity, 
  TextInput,
  Text, 
  ImageBackground, 
  Image,
  KeyboardAvoidingView } from 'react-native';
import { Header } from '../../components';
import { createNewUser } from '../../Api/ApiCalls';
import styles from './styles';

export default class Splash extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    hasErrored: false
  };

  clearState = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      hasErrored: false,
      error: ''
    });
  };

  onBackPress = () => {
    this.props.navigation.navigate('Splash')
  };

  onSubmit = async () => {
    const response = await createNewUser(this.state)
    this.clearState()
    const userKey = await response['api_key']
    if (userKey) {
      this.props.navigation.navigate('Home')
    }
    if (!userKey) {
      this.setState({ error: 'One or more input not valid' })
    }
  };

  render() {
    return (
      <ImageBackground 
        source={require('../../assets/images/splash-background.jpg')}
        style={styles.container}
      >
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.infoContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={this.onBackPress}>
                <Image  
                source={require('../../assets/images/back.png')}
                style={[styles.backBtn, { marginRight: 10 }]}
                />
              </TouchableOpacity>
              <Header style={styles.header} fontsize={35}/>
            </View>
            <View style={styles.formContainer}>
              <Text>{this.state.error}</Text>
              <TextInput 
                value={this.state.firstName}
                style={styles.formInput}
                placeholder="First Name..."
                maxLength={20}
                onChangeText={(text) => this.setState({ firstName: text })}
              />
              <TextInput           
                value={this.state.lastName}
                style={styles.formInput}
                placeholder="Last Name..."
                maxLength={20}
                onChangeText={(text) => this.setState({ lastName: text })}
              />
              <TextInput 
                value={this.state.email}
                style={styles.formInput}
                placeholder="Email Address..."
                onChangeText={(text) => this.setState({ email: text })}
              />
              <TextInput 
                value={this.state.password}
                style={styles.formInput}
                placeholder="Password..."
                maxLength={20}
                secureTextEntry
                autoCorrect={false}
                onChangeText={(text) => this.setState({ password: text })}
              />
              <TextInput 
                value={this.state.passwordConfirmation}
                style={styles.formInput}
                placeholder="Confirm Password..."
                maxLength={20}
                secureTextEntry
                autoCorrect={false}
                onChangeText={(text) => this.setState({ passwordConfirmation: text })}
              />
              <View style={styles.errMsgContainer}>
                {this.state.hasErrored && <Text>Whoops! Something is Wrong.</Text>}
              </View>
              <TouchableOpacity style={styles.formInput} onPress={this.onSubmit}>
                <Text style={{ fontWeight: 'bold' }}>Create Account!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
};