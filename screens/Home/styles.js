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
    justifyContent: 'center',
    width: Dimensions.get('window').width * .8,
  },
  header: {
    paddingTop: 200,
    marginLeft: 5,
    marginRight: 5,
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
  },
  text: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 16,
    textShadowColor:'black',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius: 5,
    textAlign: 'center',
    color: '#d5fdd5',
    marginBottom: 2
  },
  timeText: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor:'black',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius: 5,
    color: '#d5fdd5',
    marginBottom: 2
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
    overflow: 'hidden',
    marginTop: 5,
    marginBottom: 5,
    marginRight: 12,
    marginLeft: 12,
    width: Dimensions.get('window').width * .4
  }
})