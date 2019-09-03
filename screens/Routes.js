import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Splash from './Splash/';
import Home from './Home/'

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash
    },
    Home: {
      screen: Home,
    }
  },
  {
  initialRouteName: "Splash",
  headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);