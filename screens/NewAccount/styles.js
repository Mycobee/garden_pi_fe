import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#73A686',
    height: Dimensions.get('window').height,
    justifyContent: 'space-evenly',
    width: Dimensions.get('window').width
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
  }
});

