import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";

import colors from "./constants/Colors";
import layout from './constants/Layout';


const AppNavigator = createStackNavigator(
    {
        List: { screen: ListScreen },
        Detail: { screen: DetailScreen },
    },
    {
        initialRouteName: 'List',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.mainBlue,
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
                fontSize: layout.largeFontSize,
                fontWeight: 'bold',
            },
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
