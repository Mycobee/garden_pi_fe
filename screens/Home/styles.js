import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  screenContainer: {
    alignItems: 'center',
    height: Dimensions.get('window').height,
    paddingTop: 50,
    width: Dimensions.get('window').width,
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(115, 166, 134, .9)',
    padding: 10,
    margin: 5,
    width: Dimensions.get('window').width * .9,
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
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
  label: {
    fontSize: 13,
    marginTop: 5,
  },
  bold: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  graphLabel: {
    height: 25,
    marginTop: 25,
    padding: 2,
    alignItems: 'center',
    width: Dimensions.get('window').width * .55,
    marginLeft: 88
  },
  currentWidgets: {
    flexDirection: 'row'
  },
  currentSoilStatContainer: {
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'space-between',
    margin: 3,
    padding: 10,
    width: 170
  }
})