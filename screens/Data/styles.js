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
    backgroundColor: 'rgba(115, 166, 134, .7)',
    padding: 10,
    margin: 5,
    width: Dimensions.get('window').width * .95,
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
    width: Dimensions.get('window').width * .9,
  },
  header: {
    paddingTop: 200
  },
  text: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20,
    textShadowColor:'black',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius: 5,
    textAlign: 'center',
    color: '#d5fdd5',
    marginBottom: 8
  },
  carouselScroll: {
    height: 150,
    justifyContent: 'space-around',
  },
  forecastContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
    width: Dimensions.get('window').width * .85,
  },
  moistureGraphs: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width * .88,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * .8,
  },
  backBtn: {
    width: 35,
    height: 35
  }, 
  moreDataBtn: {
    
  }
})