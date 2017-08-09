import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../layouts/Home';

export const AppStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: AppStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  }
});


export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  }
});
