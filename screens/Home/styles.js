import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    backgroundColor: '#73A686',
    paddingTop: 50
  },
  header: {
    paddingTop: 200
  },
  carouselScroll: {
    height: 100
  },
  forecastContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width * .75,
    height: 55,
    borderWidth: 1
  }
})