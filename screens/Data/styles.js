import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#73A686',
    height: Dimensions.get('window').height,
    paddingTop: 50,
    width: Dimensions.get('window').width
  },
  header: {
    paddingTop: 200
  },
  carouselScroll: {
    height: 150,
    justifyContent: 'space-around',
  },
  forecastContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    width: Dimensions.get('window').width * .95
  }
})