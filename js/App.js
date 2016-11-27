import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var BottomNav = require("./commons/BottomNav.js");
var HomePage = require("./commons/pages/HomePage.js");

export default class doutianReact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomePage />
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