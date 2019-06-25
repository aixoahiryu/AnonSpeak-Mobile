import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import HomeScreen from '../../src/screen/Home';
import RoomScreen from '../../src/screen/Room';
import ProfileScreen from '../../src/screen/Profile';
import Profile2Screen from '../../src/screen/Profile2';
import SplashScreen from '../../src/screen/Splash';
import SearchScreen from '../../src/screen/Search';
import ChatScreen from '../../src/screen/Chat';
import ImageScreen from '../../src/screen/Image';
import WelcomeScreen from '../../src/screen/Welcome';
import OptionScreen from '../../src/screen/Option';
import LoginScreen from '../../src/screen/Login';

// import { BottomTabNavigation } from './BottomTab';
// import { TopTabNavigation } from './TopTab';
import SearchHeader from '../../src/component/SearchHeader';
import AppStyles from '../../src/config/style';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

// const SearchStack = createStackNavigator(
//     {
//         BottomTabNavigation: {
//             screen: BottomTabNavigation,
//             navigationOptions: {
//                 gesturesEnabled: false
//             }
//         },
//         Search: {
//             screen: SearchScreen,
//             navigationOptions: { gesturesEnabled: false }
//         }
//     },
//     {
//         mode: 'modal',
//         headerMode: 'none'
//     }
// );

// const ModalStack = createStackNavigator(
//     {
//         SearchStack: {
//             screen: SearchStack,
//             navigationOptions: ({ navigation }) => ({
//                 gesturesEnabled: false,
//                 header: <SearchHeader navigation={navigation} />
//             })
//         },
//         Camera: {
//             screen: ProfileScreen,
//             navigationOptions: { gesturesEnabled: false, header: null }
//         }
//     },
//     {
//         mode: 'modal'
//     }
// );

// const MessengerApp = createStackNavigator({
//     Splash: {
//         screen: SplashScreen,
//         navigationOptions: { gesturesEnabled: false, header: null }
//     },
//     Main: {
//         screen: ModalStack,
//         navigationOptions: {
//             gesturesEnabled: false,
//             header: null
//         }
//     },
//     Chat: {
//         screen: ChatScreen,
//         navigationOptions: { gesturesEnabled: false, header: null }
//     }
// });

const AppContainer = createAppContainer(MainNavigator);
// export const MessengerAppContainer = createAppContainer(MessengerApp);
export default AppContainer;

//====================[Tab]====================
const HomeStack = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen},
  Welcome: {screen: WelcomeScreen},
});
const ProfileStack = createStackNavigator({ Profile: {screen: ProfileScreen} });
const Profile2Stack = createStackNavigator({ Profile2: {screen: Profile2Screen} });
const ConfigStack = createStackNavigator({ Config: {screen: OptionScreen} });
// const InfoStack = createStackNavigator({ Info: {screen: TopTabNavigation} });

const TopTabNavigation = createMaterialTopTabNavigator(
    {
    	Room: {
        screen: RoomScreen,
        navigationOptions: { header: null, title: 'Rooms' }
      },
      Message: {
        screen: ChatScreen,
        navigationOptions: { header: null, title: 'Message' }
      },
      Image: {
        screen: ImageScreen,
        navigationOptions: { header: null, title: 'Image Upload' }
      },
      Profile2: {
        screen: ProfileScreen,
        navigationOptions: { header: null, title: 'Profile' }
      },
    },
    {
      tabBarPosition: 'top',
      tabBarOptions: {
        activeTintColor: 'indigo',
        inactiveTintColor: 'gray',
        pressColor: 'lightgray',
        labelStyle: {
          fontWeight: 'bold',
          fontSize: Platform.OS === 'ios' ? 11 : 12,
          // fontFamily: 'Roboto-Medium'
        },
        indicatorStyle: {
          backgroundColor: 'indigo'
        },
        style: {
          backgroundColor: 'white'
        }
      }
    }
);

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: HomeStack,
    Chat: TopTabNavigation,
    Profile: Profile2Stack,
    Config: ConfigStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
          // IconComponent = HomeIconWithBadge; 
        }
        else if (routeName === 'Chat') {
          iconName = `ios-chatboxes`;
        }
        else if (routeName === 'Profile') {
          iconName = `ios-person`;
        }
        else if (routeName === 'Config') {
          // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          iconName = `ios-cog`;
        }
        let color = focused ? 'dodgerblue' : 'gray';

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'indigo',
      inactiveTintColor: 'gray',
    },
  }
);

export const TabContainer = createAppContainer(TabNavigator);