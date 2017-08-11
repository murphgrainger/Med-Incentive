import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { List, ListItem } from 'react-native-elements';


import { COLOR_LIGHT, COLOR_DARK } from './../style/color.js';


export default class Upcoming extends Component {

  render() {
    const list = [
      {
        name: 'Zyprexa',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '100mg'
      },
      {
        name: 'Depakote',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '200mg'
      }
    ]

    return (
        <View style={styles.upcoming}>
          <List style={styles.medlist}>
            {
              list.map((l, i) => (
                <ListItem
                  roundAvatar
                  avatar={{uri:l.avatar_url}}
                  key={i}
                  title={l.name}
                  badge={{ value: 3, textStyle: { color: 'orange' }}}
                />
              ))
            }
          </List>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  upcoming: {
    flex: 3,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_LIGHT,
    width: null
  },
  medlist: {
    alignSelf: 'stretch'
  }
});

AppRegistry.registerComponent('Upcoming', () => Upcoming);
