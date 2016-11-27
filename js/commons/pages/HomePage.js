'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Dimensions from 'Dimensions';
import Button from 'apsl-react-native-button';

var Login = require("../accessIn/Login.js");

var width = Dimensions.get('window').width;
var height = Dimensions.get("window").height;

class HomePage extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	doLogin = function(){

	}

	render() {
		return (
			<View style={styles.home}>
				<Button style={styles.loginBtn}
					textStyle={styles.btnText}
					onPress={this.doLogin.bind(this)}>
						豆田未发现你的足迹，请登录
				</Button>
				<Login />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	home: {
		height: height - 60,
		alignItems: "center",
		justifyContent: "center"
	},
	loginBtn: {
		borderWidth: 1,
		borderColor: "#ff3333"
	},
	btnText: {
	}
})

module.exports = HomePage;