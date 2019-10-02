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
    justifyContent: 'center',
    marginBottom: 'auto',
    width: Dimensions.get('window').width * .8,
  },
  header: {
    marginLeft: 5,
    marginRight: 5,
  },
  backBtn: {
    height: 35,
    width: 35,
  },  
  carouselScroll: {
    height: 200
  },
  forecastContainer: {
    alignItems: 'center',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    color: '#d5fdd5',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
    textShadowColor:'black',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius: 5,
  },
  timeText: {
    color: '#d5fdd5',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
    textShadowColor:'black',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius: 5,
  },
  currentWidgets: {
    flexDirection: 'row'
  },
  moreDataBtn: {
    alignItems: 'center',
    backgroundColor: '#FAF0E6',
    borderColor: '#A14550',
    borderRadius: 10,
    borderWidth: 2,
    height: Dimensions.get('window').width * .1,
    justifyContent: 'center',
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 5,
    overflow: 'hidden',
    width: Dimensions.get('window').width * .4,
  }
})