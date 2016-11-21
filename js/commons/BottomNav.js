'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Dimensions from 'Dimensions';

var width = Dimensions.get('window').width;

class BottomNav extends Component {
	constructor(props) {
	  super(props);
	  this.state = {selectList: ["1", "0", "0", "0", "0"]};
	}

	itemSelect = function(index){
		var selectList = this.state.selectList;
		if (selectList[index] == "1") {
			return;
		}
		for (var i = 0; i < 5; i++) {
			if (i == index) {
				selectList[i] = "1";
			}else{
				selectList[i] = "0";
			}
		}
		this.setState({selectList: selectList});
	}

	render(){
		return (
			<View style={styles.bottomNav}>
				<NavItem text="首页" selected={this.state.selectList[0]} index="0" didSelect={this.itemSelect.bind(this)} />
				<NavItem text="广场" selected={this.state.selectList[1]} index="1" didSelect={this.itemSelect.bind(this)} />
				<NavItem text="发布" selected={this.state.selectList[2]} index="2" didSelect={this.itemSelect.bind(this)} />
				<NavItem text="穿越" selected={this.state.selectList[3]} index="3" didSelect={this.itemSelect.bind(this)} />
				<NavItem text="我的" selected={this.state.selectList[4]} index="4" didSelect={this.itemSelect.bind(this)} />
			</View>
		);
	}
}

class NavItem extends Component {
	constructor(props) {
	  super(props);
	}

	itemClick = function(){
		this.props.didSelect(this.props.index);
	}

	render(){
		return (
			<TouchableWithoutFeedback onPress={this.itemClick.bind(this)}>
				<View>
					<Text style={[styles.navItem, this.props.selected == "1" ? styles.selected: styles.normal]}>{this.props.text}</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	selected: {
		color: "#00cc99",
	},
	normal: {
		color: 'white'
	},
	navItem: {
		color: 'white',
		fontSize: 14,
		height: 60,
		textAlign: 'center',
		lineHeight: 40,
		width: width / 5
	},
	bottomNav: {
		width: width,
		flexDirection:'row',
		position: "absolute",
		bottom: 0,
		height: 60,
		backgroundColor: "#33465d"
	}
});

module.exports = BottomNav;