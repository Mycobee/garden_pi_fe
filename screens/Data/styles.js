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
    paddingTop: 5,
    width: Dimensions.get('window').width 
  },
  moistureGraphs: {
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width 
  },
  graphLabel: {
    height: 25,
    marginTop: 25,
    padding: 2,
    alignItems: 'center',
    width: Dimensions.get('window').width * .55,
    marginLeft: 88
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
})