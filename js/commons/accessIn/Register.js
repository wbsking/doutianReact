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

class Register extends Component {
	doLogin = function(){
	}

	doRegister = function(){

	}

	doPrivacy = function(){

	}

	render() {
		const {visible, modalClose, showLogin} = this.props
		return (
			<Modal
				animationType="slide"
				transparent={false}
				visible={visible}
				onRequestClose={modalClose}>
				<View style={styles.register}>
					<Text style={styles.title}>豆田，为美好驻足</Text>
					<TextInput placeholder="请输入邮箱" />
					<TextInput placeholder="请输入密码" secureTextEntry={true} />
					<TextInput placeholder="请输入昵称" />
					<Button style={styles.registerBtn} onPress={this.doRegister.bind(this)}>注册</Button>
					<TouchableWithoutFeedback onPress={showLogin}>
						<View>
							<Text style={styles.login}>已有账号，登录</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={this.doPrivacy.bind(this)}>
						<View>
							<Text style={styles.login}>使用条款和隐私政策</Text>
						</View>
					</TouchableWithoutFeedback>
					<Button
						style={styles.closeBtn}
						textStyle={styles.closeText}
						onPress={modalClose}>X</Button>
				</View>
			</Modal>
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

Register.propTypes = {
  visible: PropTypes.bool.isRequired,
  modalClose: PropTypes.func.isRequired,
  showLogin: PropTypes.func.isRequired
}

module.exports = Register;