import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

import HomeScreen from '../../src/screen/Home';
import ProfileScreen from '../../src/screen/Profile';
import SplashScreen from '../../src/screen/Splash';
import SearchScreen from '../../src/screen/Search';
import ChatScreen from '../../src/screen/Chat';

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
const HomeStack = createStackNavigator({ Home: {screen: HomeScreen} });
const ProfileStack = createStackNavigator({ Profile: {screen: ProfileScreen} });
// const InfoStack = createStackNavigator({ Info: {screen: TopTabNavigation} });

const TopTabNavigation = createMaterialTopTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { header: null, title: 'Messages' }
        },
        Active: {
            screen: ProfileScreen,
            navigationOptions: { header: null, title: 'Active' }
        },
        Group: {
            screen: ProfileScreen,
            navigationOptions: { header: null, title: 'Groups' }
        },
        Call: {
            screen: ProfileScreen,
            navigationOptions: { header: null, title: 'Calls' }
        }
    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: 'dodgerblue',
            inactiveTintColor: 'gray',
            pressColor: 'lightgray',
            labelStyle: {
                fontWeight: 'bold',
                fontSize: Platform.OS === 'ios' ? 11 : 12,
                // fontFamily: 'Roboto-Medium'
            },
            indicatorStyle: {
                backgroundColor: '#0084ff'
            },
            style: {
                backgroundColor: 'white'
            }
        }
    }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Chat: TopTabNavigation,
    Profile: ProfileStack,
    Info: ProfileStack,
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
        else if (routeName === 'Info') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }
        let color = focused ? 'dodgerblue' : 'gray';

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'dodgerblue',
      inactiveTintColor: 'gray',
    },
  }
);

export const TabContainer = createAppContainer(TabNavigator);