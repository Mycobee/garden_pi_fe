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
      auto_water: false
    }
  }

  onBackPress = () => {
    this.props.navigation.navigate('Home')
  };

  openCamera = () => {
    this.props.navigation.navigate('PhotoClicker')
  };

  view = () => {
    console.log(this.state)
  }

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
        <Text style={styles.text}>Add a New Garden</Text>
        <TextInput
          style={styles.input}
          placeholder="Garden Name"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          autoCorrect={true}
          autoCapitalize={'words'}
        />
        <TextInput
          style={styles.input}
          placeholder="Max Moisture (0-100)"
          onChangeText={(max_moisture) => this.setState({max_moisture})}
          value={this.state.max_moisture}
          keyboardType={'decimal-pad'}
        />
        <TextInput
          style={styles.input}
          placeholder="Min Moisture (0-100)"
          onChangeText={(min_moisture) => this.setState({min_moisture})}
          value={this.state.min_moisture}
          keyboardType={'decimal-pad'}
        />
        <TouchableOpacity 
          style={styles.moreDataBtn}
          onPress={this.checkTextInput}
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