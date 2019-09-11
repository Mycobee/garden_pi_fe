import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  cameraScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  cameraBtnContainer: {
    marginTop: Dimensions.get('window').height * .80, 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginBottom: 50,
    flexDirection: 'row'
  },
  cameraBtn: {
    height: 50, 
    width: 150, 
    borderColor: '#a14550', 
    borderWidth: 2, 
    borderRadius: 30, 
    backgroundColor: '#d5fdd5', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  previewImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height 
  },
  backBtn: {
    width: 35,
    height: 35,
    backgroundColor: '#d5fdd5',
    borderRadius: 17.5,
  }, 
});

