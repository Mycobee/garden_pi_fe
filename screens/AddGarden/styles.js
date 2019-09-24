import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  screenContainer: {
    alignItems: 'center',
    height: Dimensions.get('window').height,
    paddingTop: 50,
    width: Dimensions.get('window').width,
  }
})
