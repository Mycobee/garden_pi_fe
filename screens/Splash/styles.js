import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#73A686',
    height: Dimensions.get('window').height,
    justifyContent: 'space-evenly',
    width: Dimensions.get('window').width,
  },  
  textContainer: {
    alignItems: 'center',
    borderRadius: 10,
    height: Dimensions.get('window').height * 0.50,
    justifyContent: 'space-between',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    width: Dimensions.get('window').width * 0.875,
  },
  splashEnterBtn: {
    alignItems: 'center',
    backgroundColor: '#FAF0E6',
    borderColor: '#A14550',
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height * 0.40,
    overflow: 'hidden',
    width: 200,
  },
  plantIcon: {
    height: 200,
    width: 200,
  },
  loginForm: {
    alignItems: 'center',
    backgroundColor: 'rgba(115, 166, 134, .7)',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    height: Dimensions.get('window').height * .22,
    justifyContent: 'space-evenly',
    width: Dimensions.get('window').width * .75,
  },
  loginInput: {
    alignItems: 'center',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    height: 45,
    justifyContent: 'center',
    paddingLeft: 10,
    width: Dimensions.get('window').width * .65,
  },
  loginBtn: {
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    height: 45,
    justifyContent: 'center',
    width: Dimensions.get('window').width * .28,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

