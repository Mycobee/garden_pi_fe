import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    // alignItems: 'center',
    backgroundColor: '#73A686',
    height: Dimensions.get('window').height,
    justifyContent: 'space-evenly',
    width: Dimensions.get('window').width
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(115, 166, 134, .7)',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    height: Dimensions.get('window').height * .65,
    margin: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    width: Dimensions.get('window').width * .95,
  },
  formContainer: {
    backgroundColor: "rgb(192,192,192)",
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    flexDirection: 'column',
    height: Dimensions.get('window').height * .50,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 25,
  },
  formInput: {
    alignItems: 'center',
    backgroundColor: "#fff",
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    paddingLeft: 10,
    width: Dimensions.get('window').width * .60,
    
  },
  errMsgContainer: {
    height: 15
  },
  backBtn: {
    width: 35,
    height: 35
  },  
});

