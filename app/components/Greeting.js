import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { COLOR_PRIMARY, COLOR_DARK } from './../style/color.js';


export default class Greeting extends Component {

  render() {
    return (
        <Image style={styles.header}
          source={{uri: 'https://cdn.mirrranchgroup.com/media/Deer-Haven-Ranch-sunrise-1024x512.jpg'}}>
          <Text style={styles.welcome}>Good Morning John!</Text>
          <Text style={styles.welcome}>9:00AM</Text>
        </Image>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: null
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'white'
  }
});

AppRegistry.registerComponent('Greeting', () => Greeting);
