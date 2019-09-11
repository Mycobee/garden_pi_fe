import React, { Component } from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  ImageBackground, 
  Image,
  ActivityIndicator, 
  Dimensions } from 'react-native';
import { fetchWeather, fetchGarden, fetchGardenEnv } from '../../Api/ApiCalls';
import { Header } from '../../components';
import styles from './styles';

export default class Splash extends Component {
  state = {
    foreCast: null,
    garden: null,
    env: null,
    appLoaded: false
  };

  async componentDidMount() {
    await this.getWeather()
    await this.getGarden()
    await this.getEnv()
    this.setState({ appLoaded: true })
  };
  getWeather = async () => {
    await fetchWeather() 
    .then(weatherData => this.setState({foreCast: weatherData}))
  };
  getGarden = async () => {
    await fetchGarden()
    .then(gardenData => this.setState({garden: gardenData}))
  };

  getEnv = async () => {
    await fetchGardenEnv()
    .then(envData => this.setState({env: envData}))

  };

  onEnterPress = () => {
    this.props.navigation.navigate('Home', {
      foreCast: this.state.foreCast,
      env: this.state.env
    })
  };

  render() {
    return (
      <ImageBackground 
        source={require('../../assets/images/splash-background.jpg')}
        style={styles.container}
      >
        <View>
          <Header fontsize={55}/>
          <View style={styles.textContainer}>

            {!this.state.appLoaded &&
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
              <Image  
                style={{ height: 150, width: 150 }}
                source={require('../../assets/images/beeBoi.gif')}
              />
            </View>
            }
            {
              this.state.appLoaded &&
              <TouchableOpacity 
              style={styles.splashEnterBtn}
              onPress={this.onEnterPress}
              >
              <Text>
                Enter your Garden...
              </Text>
            </TouchableOpacity>
            }

          </View>
        </View>
      </ImageBackground>
    )
  }
};