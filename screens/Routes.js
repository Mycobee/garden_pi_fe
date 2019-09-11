import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Splash from './Splash/';
import Home from './Home/';
import Data from './Data';
import PhotoClicker from './PhotoClicker';

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
    },
    PhotoClicker: {
      screen: PhotoClicker
    },
  },
  {
  initialRouteName: "Splash",
  headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);