import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { HomeTabNavigation } from './TopTab';
import HomeScreen from '../../src/screen/Home';
import ProfileScreen from '../../src/screen/Profile';

import TabIcon from '../../src/component/TabIcon';
import AppStyles from '../../src/config/style';

const HomeTabIcon = ({ tintColor }) => (
    <TabIcon name="home" tintColor={tintColor} />
);
const PeopleTabIcon = ({ tintColor }) => (
    <TabIcon name="supervisor-account" tintColor={tintColor} />
);
const CameraTabIcon = ({ tintColor }) => (
    <TabIcon name="photo-camera" tintColor={tintColor} type="rounded" />
);
const GamesTabIcon = ({ tintColor }) => (
    <TabIcon name="game-controller" tintColor={tintColor} type="entypo" />
);
const PopularTabIcon = ({ tintColor }) => (
    <TabIcon name="toys" tintColor={tintColor} />
);

export const BottomTabNavigation = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeTabNavigation,
            navigationOptions: {
                header: null,
                tabBarIcon: HomeTabIcon
            }
        },

        ProfileScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                header: null,
                tabBarIcon: PeopleTabIcon
            }
        },
        HomeScreen: {
            screen: ProfileScreen,
            navigationOptions: ({ navigation }) => ({
                header: null,
                tabBarIcon: CameraTabIcon,
                tabBarOnPress: ({ navigation }) => {
                    navigation.navigate('CameraScreen');
                }
            })
        },
        HomeScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                header: null,
                tabBarIcon: GamesTabIcon
            }
        },
        HomeScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                header: null,
                tabBarIcon: PopularTabIcon
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#0084ff',
            inactiveTintColor: AppStyles.colors.inactiveGreyColor,
            pressColor: '#7f8c8d'
        }
    }
);