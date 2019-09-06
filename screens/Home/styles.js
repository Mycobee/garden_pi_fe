import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#73A686',
    height: Dimensions.get('window').height,
    paddingTop: 50,
    width: Dimensions.get('window').width,
  },
  header: {
    paddingTop: 200
  },
  carouselScroll: {
    height: 200
  },
  forecastContainer: {
    flexDirection: 'column',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
  },
  currentIcon: {
    height: 100,
    width: 100,
  },
  currentWeatherContainer: {
    alignItems: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 20,
    width: Dimensions.get('window').width * .90,
  },
  currentWeatherTemp: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 13
  },
  bold: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  graphLabel: {
    height: 25,
    marginTop: 25,
    padding: 2,
    backgroundColor: '#d5fdd5',
    alignItems: 'center',
    width: Dimensions.get('window').width * .55,
    marginLeft: 88,
    borderColor: '#A14550',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})