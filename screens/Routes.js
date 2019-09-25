import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Splash from './Splash/';
import Home from './Home/';
import Data from './Data';
import PhotoClicker from './PhotoClicker';
import PhotoPicker from './PhotoPicker';
import NewAccount from './NewAccount';

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash
    },
    NewAccount: {
      screen: NewAccount
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
    PhotoPicker: {
      screen: PhotoPicker
    }
  },
  {
  initialRouteName: "Splash",
  headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);