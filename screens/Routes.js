import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Splash from './Splash/';
import Home from './Home/';
import Data from './Data';

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash
    },
    Home: {
      screen: Home
    },
    Data: {
      screen: Data
    }
  },
  {
  initialRouteName: "Splash",
  headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);