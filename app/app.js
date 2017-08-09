import React, {Component} from 'react';
import { NavigatorIOS, View, Text } from 'react-native';

import Home from './components/Home';

export default class App extends Component {
  render() {
  return (
    <View>
      <NavigatorIOS
       initialRoute={{
         component: Home,
         title: 'Home',
       }}
     />
  </View>
    )
  }
}
