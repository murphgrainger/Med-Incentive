import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { COLOR_PRIMARY, COLOR_DARK } from './../style/color.js';


export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Murph's React Native App!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PRIMARY,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('Home', () => Home);
