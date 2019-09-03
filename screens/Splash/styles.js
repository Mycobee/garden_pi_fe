import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#73A686',
    
  },  
  textContainer: {
    width: Dimensions.get('window').width * 0.875,
    height: Dimensions.get('window').height * 0.50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: 20
  },
  splashHeader: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  splashEnterBtn: {
    borderWidth: 2,
    borderColor: '#A14550',
    backgroundColor: '#FAF0E6',
    width: 200,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.40,
  },
  plantIcon: {
    width: 200,
    height: 200
  }
});

