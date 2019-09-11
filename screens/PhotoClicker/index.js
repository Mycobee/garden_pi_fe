import React from 'react';
import { Text, View, TouchableOpacity, CameraRoll, ImageBackground, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

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
          style={{ 
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height }}
          >
          <View style={{ marginTop: Dimensions.get('window').height * .85, marginLeft: 'auto', marginRight: 'auto', flexDirection: 'row' }}>
            <TouchableOpacity style={{ margin: 5, height: 50, width: 120, borderColor: '#a14550', borderWidth: 2, borderRadius: 30, fontSize: 30, backgroundColor: '#d5fdd5', color: 'black', fontSize: 25, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center' }}onPress={this.onSavePhotoPress}><Text>Save Photo</Text></TouchableOpacity>
            <TouchableOpacity style={{ margin: 5, height: 50, width: 120, borderColor: '#a14550', borderWidth: 2, borderRadius: 30, fontSize: 30,fontWeight: 'bold', backgroundColor: '#d5fdd5', color: 'black', fontSize: 25, justifyContent: 'center', alignItems: 'center' }}onPress={this.onTakeNewPhotoPress}><Text>Take New Photo</Text></TouchableOpacity>
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
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 25
                }}
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
                    marginBottom: 10, 
                    color: 'white' 
                  }}
                > 
                  Flip 
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 25
                }}
                onPress={this.snapPhoto}>
                <Text 
                  style={{ 
                    fontSize: 18, 
                    marginBottom: 10, 
                    color: 'white' 
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