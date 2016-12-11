import React, { Component } from 'react'
import {createStore} from 'redux'
import { Provider } from 'react-redux'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppReducer from "./reducers/app"
import Root from './containers/Root'

let store = createStore(AppReducer)


export default class doutianReact extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('doutianReact', () => doutianReact);