'use strict';

import React, {Component, Dimensions} from 'react';
import {Text, View, StyleSheet} from 'react-native';

var width = Dimensions.get('window').width;

class BottomNav extends Component {
	render(){
		return (
			<View style={styles.bottomNav}>
				<NavItem text="首页" />
				<NavItem text="广场" />
				<NavItem text="发布" />
				<NavItem text="穿越" />
				<NavItem text="我的" />
			</View>
		);
	}
}

class NavItem extends Component {
	render(){
		return (
			<View>
				<Text style={styles.navItem}>{this.props.text}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	navItem: {
		color: 'white',
		fontSize: 14,
		height: 60,
		width: width / 5
	},
	bottomNav: {
		width: width,
		flexDirection:'row',
		position: "absolute",
		bottom: 0,
		height: 60,
		backgroundColor: "#0ce"
	}
});

module.exports = BottomNav;