import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  cameraScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  cameraBtnContainer: {
    marginTop: Dimensions.get('window').height * .85, 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginBottom: 50,
    flexDirection: 'row'
  },
  cameraBtn: {
    height: 40, 
    width: 100, 
    borderColor: '#a14550', 
    borderWidth: 2, 
    borderRadius: 30, 
    backgroundColor: '#f1f1f1', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8
  },
  previewImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height 
  },
  backBtn: {
    width: 35,
    height: 35,
    backgroundColor: '#f1f1f1',
    borderRadius: 17.5,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8
  }, 
});

