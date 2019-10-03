import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#73A686',
    height: Dimensions.get('window').height,
    justifyContent: 'space-evenly',
    width: Dimensions.get('window').width
  },
  formContainer: {
    backgroundColor: 'rgba(115, 166, 134, .9)',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    flexDirection: 'column',
    width: Dimensions.get('window').width * 0.75,
    // height: Dimensions.get('window').height * .35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    marginBottom: 100,
    marginLeft: 20
  },
  formInput: {
    backgroundColor: '#d5fdd5',
    width: Dimensions.get('window').width * .65,
    height: 45,
    paddingLeft: 10,
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  errMsgContainer: {
    height: 20
  },
  backBtn: {
    width: 35,
    height: 35
  },  
  createBtn: {
    backgroundColor: '#d5fdd5',
    width: Dimensions.get('window').width * .4,
    height: 45,
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

