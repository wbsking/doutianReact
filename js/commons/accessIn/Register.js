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
  TouchableWithoutFeedback
} = ReactNative;

class Register extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	doLogin = function(){
	}

	doRegister = function(){

	}

	doPrivacy = function(){

	}

	render() {
		return (
			<View style={styles.register}>
				<Text style={styles.title}>豆田，为美好驻足</Text>
				<TextInput placeholder="请输入邮箱" />
				<TextInput placeholder="请输入密码" secureTextEntry={true} />
				<TextInput placeholder="请输入昵称" />
				<Button style={styles.registerBtn} onPress={this.doRegister.bind(this)}>注册</Button>
				<TouchableWithoutFeedback onPress={this.doLogin.bind(this)}>
				<View>
					<Text style={styles.login}>已有账号，登录</Text>
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={this.doPrivacy.bind(this)}>
				<View>
					<Text style={styles.login}>使用条款和隐私政策</Text>
				</View>
			</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	register: {
		paddingLeft: 20,
		paddingRight: 20
	},
	title: {
		marginTop: 40,
		textAlign: "center",
		fontSize: 26,
		height: 60,
		lineHeight: 40
	},
	registerBtn: {
		marginTop: 30,
	},
	login: {
		textAlign: "center",
		marginTop: 20,
		color: "#06c"
	}
});

module.exports = Register;