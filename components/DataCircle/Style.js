import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  currentSoilStatContainer: {
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 3,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    width: Dimensions.get('window').width * .4,
    height: Dimensions.get('window').height * .17
  }
})