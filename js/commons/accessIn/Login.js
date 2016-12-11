'use strict';

const React = require('react');
const ReactNative = require('react-native');
import Button from 'apsl-react-native-button';
import {PropTypes, Component} from 'react'

const {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback
} = ReactNative;


class Login extends Component {
	doLogin = function(){

	}

	render() {
		const {visible, modalClose, showRegister} = this.props
		return (
				<Modal
					animationType="slide"
					transparent={false}
					visible={visible}
					onRequestClose={modalClose}
					>
					<View style={styles.login}>
						<Text style={styles.title}>恰似故人来</Text>
						<TextInput placeholder="请输入邮箱" />
						<TextInput placeholder="请输入密码" secureTextEntry={true} />
						<Button style={styles.loginBtn} onPress={this.doLogin.bind(this)}>登录</Button>
						<TouchableWithoutFeedback onPress={showRegister}>
						<View>
							<Text style={styles.register}>没有帐号，注册一个</Text>
						</View>
					</TouchableWithoutFeedback>
					</View>
					<Button
						style={styles.closeBtn}
						textStyle={styles.closeText}
						onPress={modalClose}>X</Button>
				</Modal>
		);
	}
}

const styles = StyleSheet.create({
	login: {
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
	loginBtn: {
		marginTop: 30,
	},
	register: {
		textAlign: "center",
		marginTop: 20,
		color: "#06c"
	},
	closeBtn: {
		position: "absolute",
		width: 40,
		height: 40,
		top: 10,
		right: 10,
		borderWidth: 0
	},
	closeText: {
		color: "rgba(255, 0, 51, 1)",
		fontSize: 20
	}
});

Login.propTypes = {
  visible: PropTypes.bool.isRequired,
  modalClose: PropTypes.func.isRequired,
  showRegister: PropTypes.func.isRequired
}

export default Login
