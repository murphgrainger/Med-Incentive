import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { COLOR_PRIMARY, COLOR_DARK } from './../style/color.js';

import Greeting from './../components/Greeting';
import QuoteBox from './../components/QuoteBox';
import Upcoming from './../components/Upcoming';


export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Greeting></Greeting>
        <QuoteBox></QuoteBox>
        <Upcoming></Upcoming>
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
  }
});

AppRegistry.registerComponent('Home', () => Home);
