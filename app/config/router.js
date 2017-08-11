import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { COLOR_PRIMARY, COLOR_DARK } from './../style/color.js';


import Home from '../layouts/Home';
import Cabinet from '../layouts/Cabinet';


export const AppStack = StackNavigator({
  Home: {
    screen: Home
  }
  }, {
    headerMode: 'none'
  });

export const Tabs = TabNavigator({
  Home: {
    screen: AppStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
    },
  },
  Cabinet: {
    screen: Cabinet,
    navigationOptions: {
      tabBarLabel: 'Cabinet',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  }
  }, {
  mode: 'modal',
  headerMode: 'none',
});
