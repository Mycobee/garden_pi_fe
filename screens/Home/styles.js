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
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    width: Dimensions.get('window').width * .95
  },
  currentIcon: {
    height: 100,
    width: 100,
  },
  currentWeatherContainer: {
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 20,
    width: Dimensions.get('window').width * .80,
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
  }
})