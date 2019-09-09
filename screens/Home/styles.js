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
    backgroundColor: 'rgba(115, 166, 134, .8)',
    padding: 10,
    margin: 5,
    width: Dimensions.get('window').width * .9,
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * .8,
  },
  header: {
    paddingTop: 200
  },
  backBtn: {
    width: 35,
    height: 35
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
  text: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
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
  waterGardenBtn: {
    alignItems: 'center',
    backgroundColor: '#FAF0E6',
    borderColor: '#A14550',
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    justifyContent: 'center',
    marginTop: 15,
    overflow: 'hidden',
    width: 200
  }
})