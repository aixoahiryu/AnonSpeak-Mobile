import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import HomeScreen from 'src/screen/Home';
import ProfileScreen from 'src/screen/Profile';

import AppStyles from 'src/config/style';

export const HomeTabNavigation = createMaterialTopTabNavigator(
    {
        MessagesScreen: {
            screen: MessagesScreen,
            navigationOptions: { header: null, title: 'Messages' }
        },

        ActiveScreen: {
            screen: ActiveScreen,
            navigationOptions: { header: null, title: 'Active' }
        },
        GroupsScreen: {
            screen: GroupsScreen,
            navigationOptions: { header: null, title: 'Groups' }
        },
        CallsScreen: {
            screen: CallsScreen,
            navigationOptions: { header: null, title: 'Calls' }
        }
    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: AppStyles.colors.accentColor,
            inactiveTintColor: AppStyles.colors.inactiveGreyColor,
            pressColor: AppStyles.colors.lightGreyCOlor,
            labelStyle: {
                fontWeight: 'bold',
                fontSize: Platform.OS === 'ios' ? 11 : 12,
                fontFamily: AppStyles.fonts.FONT_MEDIUM
            },
            indicatorStyle: {
                backgroundColor: AppStyles.colors.accentColor
            },
            style: {
                backgroundColor: 'white'
            }
        }
    }
);