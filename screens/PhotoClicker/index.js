import React from 'react';
import { Text, View, TouchableOpacity, CameraRoll } from 'react-native';
import { takeSnapshotAsync } from 'expo';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class PhotoClicker extends React.Component {
  state = {
    cameraRollUri: null,
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  snapPhoto = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      console.log(photo.uri)
      CameraRoll.saveToCameraRoll(photo.uri)
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
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