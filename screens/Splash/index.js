import React, { Component } from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  ImageBackground, 
  Image,
  TextInput,
  Alert } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { 
  fetchWeather, 
  fetchGarden, 
  fetchGardenEnv, 
  signInUser, 
  fetchGraphData,
  fetchPhotos } from '../../Api/ApiCalls';
import { Header } from '../../components';
import styles from './styles';

export default class Splash extends Component {
  state = {
    appLoaded: false,
    email: '',
    env: null,
    error:'',
    foreCast: null,
    garden: null,
    loading: false,
    map: null,
    password: ''
  };

  resetState =() => {
    this.setState({
      appLoaded: false,
      email: '',
      env: null,
      error:'',
      foreCast: null,
      garden: null,
      loading: false,
      map: null,
      password: '',
      averages: null,
      photos: null
    });
  };

  getWeather = async () => {
    await fetchWeather() 
    .then(weatherData => this.setState({foreCast: weatherData}))
  };
  
  getGarden = async (userKey) => {
    await fetchGarden(userKey)
    .then(gardenData => this.setState({garden: gardenData}))
  };

  getEnv = async (userKey) => {
    await fetchGardenEnv(userKey)
    .then(envData => this.setState({env: envData}))
  };

  getAverages = async () => {
    await fetchGraphData(6)
    .then(avgs => this.setState({ averages: avgs }))
  };

  getPhotos = async () => {
    await fetchPhotos()
    .then(photos => this.setState({ photos: photos }))
  };

  signIn = async () => {
    this.setState({ loading: true })
    const response = await signInUser(this.state)
    const userKey = response['api_key']
    if (userKey) {
      this.setState({ email: '', password: '', error: '' })
      await this.getWeather();
      await this.getGarden(userKey);
      await this.getEnv(userKey);
      await this.getAverages();
      await this.getPhotos();
      this.setState({ loading: false, appLoaded: true })
      await this.onEnterPress()
    }
    if (!userKey) {
      this.setState({ loading: false, email: '', password: '' })
      Alert.alert('Login Error', 'Email/Password incorrect')
    }
  };

  onEnterPress = async () => {
    this.props.navigation.navigate('Home', {
      foreCast: this.state.foreCast,
      env: this.state.env,
      averages: this.state.averages,
      photos: this.state.photos
    });
  };

  onCreateNewPress = () => {
    this.setState({ email: '', password: '', error: '' })
    this.props.navigation.navigate('NewAccount')
  };

  render() {
    return (
      <ImageBackground 
        source={require('../../assets/images/splash-background.jpg')}
        style={styles.container}
      >
        <NavigationEvents onDidFocus={() => this.resetState()} />
        <View>
          <Header fontsize={55}/>
          <View style={styles.textContainer}>
            {
              !this.state.loading &&
              <View style={styles.loginForm}>
                <Text>{this.state.error}</Text>
                <TextInput
                  placeholder='E-Mail...' 
                  style={styles.loginInput}
                  onChangeText={text => this.setState({ email: text })}
                  value={this.state.email}
                />
                <TextInput
                  placeholder='Password...' 
                  style={styles.loginInput}
                  onChangeText={text => this.setState({ password: text })}
                  value={this.state.password}
                  secureTextEntry
                />
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={this.signIn}
                  >
                    <Text style={styles.text}>Sign In</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={this.onCreateNewPress}
                  >
                    <Text style={styles.text}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
            {
              this.state.loading &&
              <View 
                style={{ 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginTop: 'auto', 
                  marginBottom: 'auto' }}
                >
                <Image  
                  style={{ height: 200, width: 200 }}
                  source={require('../../assets/images/beeBoi.gif')}
                />
              </View>
            }
          </View>
        </View>
      </ImageBackground>
    );
  };
};