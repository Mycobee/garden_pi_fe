import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'center',
    marginTop: 15,
    padding: 2,
    width: Dimensions.get('window').width * .65,
    height: Dimensions.get('window').height * .1
  },
  noDataText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})

