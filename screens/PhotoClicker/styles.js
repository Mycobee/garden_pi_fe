import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  cameraScreen: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  cameraBtnContainer: {
    flexDirection: 'row',
    marginBottom: 50,
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginTop: Dimensions.get('window').height * .85, 
  },
  cameraBtn: {
    alignItems: 'center',
    backgroundColor: '#f1f1f1', 
    borderColor: '#a14550', 
    borderRadius: 30, 
    borderWidth: 2, 
    height: 40, 
    justifyContent: 'center', 
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    width: 100, 
  },
  previewImage: {
    height: Dimensions.get('window').height, 
    width: Dimensions.get('window').width,
  },
  backBtn: {
    backgroundColor: '#f1f1f1',
    borderRadius: 17.5,
    height: 35,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    width: 35,
  }, 
});

