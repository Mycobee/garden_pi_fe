import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#73A686'
  },
  forecastContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
    width: Dimensions.get('window').width * .95,
  }
})