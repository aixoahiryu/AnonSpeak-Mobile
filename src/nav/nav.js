import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from '../../src/screen/Home';
import ProfileScreen from '../../src/screen/Profile';

import { BottomTabNavigation } from './BottomTab';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;