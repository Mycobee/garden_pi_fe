import React, { Component } from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  ImageBackground, 
  Image,
  TextInput } from 'react-native';
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

  onCreateNewPress = () => {
    console.log('enter new acct')
    this.props.navigation.navigate('NewAccount')
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
            {
              this.state.appLoaded &&
                <View style={styles.loginForm}>
                <TextInput
                  placeholder='E-Mail...' 
                  style={styles.loginInput}
                />
                <TextInput
                  placeholder='Password...' 
                  style={styles.loginInput}
                />
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={this.onEnterPress}
                  >
                    <Text>Sign In</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={this.onCreateNewPress}
                  >
                    <Text>
                      Sign Up!
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
            }
            {!this.state.appLoaded &&
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
              <Image  
                style={{ height: 200, width: 200 }}
                source={require('../../assets/images/beeBoi.gif')}
              />
            </View>
            }
          </View>
        </View>
      </ImageBackground>
    )
  }
};