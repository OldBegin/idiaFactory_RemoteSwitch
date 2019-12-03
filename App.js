import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen: SignupScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);
