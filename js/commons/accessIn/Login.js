'use strict';

const React = require('react');
const ReactNative = require('react-native');
import Button from 'apsl-react-native-button';
const {
	Component
} = React;

const {
  View,
  Text,
  TextInput,
  StyleSheet,
} = ReactNative;

const onButtonPress = () => {
};

class Login extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	doLogin = function(){
	}

	render() {
		return (
			<View style={styles.login}>
				<Text style={styles.title}>恰似故人来</Text>
				<TextInput placeholder="请输入邮箱" />
				<TextInput placeholder="请输入密码" secureTextEntry={true} />
				<Button onPress={this.doLogin.bind(this)}>登录</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	login: {
		paddingLeft: 20,
		paddingRight: 20
	},
	title: {
		marginTop: 20,
		textAlign: "center",
		fontSize: 26,
		height: 60,
		lineHeight: 40
	}
});

module.exports = Login;