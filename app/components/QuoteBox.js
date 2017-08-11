import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { COLOR_PRIMARY, COLOR_DARK } from './../style/color.js';


export default class QuoteBox extends Component {

  render() {
    return (
        <View style={styles.quotebox}>
          <Text style={styles.quote}>Your effect on others is the most valuable currency there is. - Jim Carrey</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  quotebox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PRIMARY,
    width: null
  },
  quote: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'black',
    margin: 10
  }
});

AppRegistry.registerComponent('QuoteBox', () => QuoteBox);
