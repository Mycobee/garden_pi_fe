import React from 'react';
import { Text, View, TouchableOpacity, CameraRoll, ImageBackground, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import styles from './styles';

export default class PhotoClicker extends React.Component {
  state = {
    cameraRollUri: null,
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    imageUri: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  snapPhoto = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      console.log(photo)
      this.setState({ imageUri: photo })
    }
  };

  onSavePhotoPress = () => {
    CameraRoll.saveToCameraRoll(this.state.imageUri.uri)
    this.setState({ imageUri: null })
  };

  onBackBtnPress = () => {
    this.props.navigation.navigate('Data')
  }

  onTakeNewPhotoPress = () => {
    this.setState({ imageUri: null })
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if (this.state.imageUri) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <ImageBackground 
          source={this.state.imageUri} 
          style={styles.previewImage}
          >
          <View style={styles.cameraBtnContainer}>
            <TouchableOpacity style={styles.cameraBtn} onPress={this.onSavePhotoPress}><Text style={{ fontWeight: 'bold' }}>Save Photo</Text></TouchableOpacity>
            <TouchableOpacity style={styles.cameraBtn}onPress={this.onTakeNewPhotoPress}><Text style={{ fontWeight: 'bold' }}>Take New Photo</Text></TouchableOpacity>
          </View>
      </ImageBackground>
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
            ref={ref => {
              this.camera = ref;
            }}
            style={{ flex: 1 }} type={this.state.type}
          >
          <TouchableOpacity onPress={this.onBackBtnPress} style={{ marginTop: 70, marginLeft: 30 }}>
            <Image  
              source={require('../../assets/images/back.png')}
              style={styles.backBtn}
            />
          </TouchableOpacity>
            <View
              style={styles.cameraBtnContainer}>
              <TouchableOpacity
                style={styles.cameraBtn}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text 
                  style={{ 
                    fontSize: 18, 
                    fontWeight: 'bold'
                  }}
                > 
                  Flip 
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cameraBtn}
                onPress={this.snapPhoto}>
                <Text 
                  style={{ 
                    fontSize: 18, 
                    fontWeight: 'bold'
                  }}
                > 
                  Snap 
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
};