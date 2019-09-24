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
    paddingTop: 200
  },
  backBtn: {
    width: 35,
    height: 35
  },
})