/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var BottomNav = require("./js/commons/BottomNav.js");

export default class doutianReact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BottomNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('doutianReact', () => doutianReact);
