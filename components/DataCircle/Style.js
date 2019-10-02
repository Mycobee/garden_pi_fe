import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  currentSoilStatContainer: {
    alignItems: 'center',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    height: Dimensions.get('window').height * .17,
    justifyContent: 'space-between',
    marginBottom: 3,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    padding: 10,
    width: Dimensions.get('window').width * .4,
  }
})