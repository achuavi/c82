import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from '../components/AppTabNavigator';
import CustomSideBarMenu from '../components/CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
      screen : AppTabNavigator
      },
      Setting:{
        screen:SettingsScreen
      }
    },
    {
      contentComponent:CustomSideBarMenu
    },
    {
      initialRouteName : 'Home'
    })