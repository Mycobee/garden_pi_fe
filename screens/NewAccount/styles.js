import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#73A686',
    height: Dimensions.get('window').height,
    justifyContent: 'space-evenly',
    width: Dimensions.get('window').width
  }
});

