import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  cameraBtnContainer: {
    marginTop: Dimensions.get('window').height * .80, 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    flexDirection: 'row'
  },
  cameraBtn: {
    margin: 5, 
    height: 50, 
    width: 120, 
    borderColor: '#a14550', 
    borderWidth: 2, 
    borderRadius: 30, 
    fontSize: 30, 
    backgroundColor: '#d5fdd5', 
    color: 'black', 
    fontSize: 25, 
    fontWeight: 'bold', 
    justifyContent: 'center', 
    alignItems: 'center',
    fontWeight: 'bold'
  },
  previewImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  backBtn: {
    width: 35,
    height: 35,
    backgroundColor: '#d5fdd5',
    borderRadius: 17.5
  }, 
});

