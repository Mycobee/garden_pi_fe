import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  currentWeatherContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 20,
    width: Dimensions.get('window').width * .85,
  },
  currentWeatherTemp: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  icon: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    width: 200,
  },
  bold: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 13,
    marginTop: 5,
  },
});