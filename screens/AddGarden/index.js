import React, { Component } from 'react';
import { 
  View, 
  Text,
  TextInput, 
  TouchableOpacity, 
  Dimensions, 
  ImageBackground,
  Image } from 'react-native';
import styles from './styles';
import { Header } from '../../components';

export class AddGarden extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      latitude: '',
      longitude: '',
      max_moisture: '',
      min_moisture: '',
      auto_water: false,
      location: null
    }
  }

  onBackPress = () => {
    this.props.navigation.navigate('Home')
  };

  openCamera = () => {
    this.props.navigation.navigate('PhotoClicker')
  };

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);
        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  checkTextInput = () => {
    if (this.state.name != '') {
      if (this.state.max_moisture != '') {
        if (this.state.min_moisture != '') {
          if (this.state.max_moisture > this.state.min_moisture) {
          alert('Garden Created!')
      } else {
        alert('Please Enter A Max That Is Greater Than The Min');
        }
      } else {
        alert('Please Enter Min Moisture');
        }
      } else {
        alert('Please Enter Max Moisture');
        }
      } else {
        alert('Please Enter Name');
      }
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
      <View style={styles.infoContainer}>
        <Text style={styles.text}>
          Add a New Garden
        </Text>
        <TextInput
          autoCapitalize={'words'}
          autoCorrect={true}
          onChangeText={(name) => this.setState({name})}
          placeholder="Garden Name"
          style={styles.input}
          value={this.state.name}
        />
        <TextInput
          keyboardType={'decimal-pad'}
          onChangeText={(max_moisture) => this.setState({max_moisture})}
          placeholder="Max Moisture (0-100)"
          style={styles.input}
          value={this.state.max_moisture}
        />
        <TextInput
          keyboardType={'decimal-pad'}
          onChangeText={(min_moisture) => this.setState({min_moisture})}
          placeholder="Min Moisture (0-100)"
          style={styles.input}
          value={this.state.min_moisture}
        />
        <Text>Location: {this.state.location}</Text>
        <TouchableOpacity 
          onPress={this.findCoordinates}
          style={styles.moreDataBtn}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
      </View>
    )
  }
}

export default AddGarden;