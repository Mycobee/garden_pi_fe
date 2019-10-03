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
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    width: Dimensions.get('window').width * .95,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * .9,
  },
  header: {
    paddingTop: 200
  },
  text: {
    color: '#d5fdd5',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor:'black',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius: 5,
  },
  carouselScroll: {
    height: Dimensions.get('window').height * .16,
    justifyContent: 'space-around',
  },
  forecastContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
    width: Dimensions.get('window').width * .856,
  },
  moistureGraphs: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width * .88,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * .8,
  },
  backBtn: {
    height: 35,
    width: 35,
  }, 
  cameraBtn: {
    alignItems: 'center',
    backgroundColor: '#FAF0E6',
    borderColor: '#A14550',
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    overflow: 'hidden',
    width: 200,
  }
})