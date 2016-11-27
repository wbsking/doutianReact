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
  Modal,
  TouchableWithoutFeedback
} = ReactNative;


class Login extends Component {
	constructor(props) {
	  super(props);
	  this.state = {visible: true};
	}

	setModalVisible(visible) {
		this.setState({visible: visible})
	}

	doLogin = function(){
	}

	doRegister = function(){

	}

	doClose = function(){
		this.setModalVisible(false);
	}

	modalClose = function(){}

	render() {
		return (
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.visible}
					onRequestClose={this.modalClose.bind(this)}
					>
					<View style={styles.login}>
						<Text style={styles.title}>恰似故人来</Text>
						<TextInput placeholder="请输入邮箱" />
						<TextInput placeholder="请输入密码" secureTextEntry={true} />
						<Button style={styles.loginBtn} onPress={this.doLogin.bind(this)}>登录</Button>
						<TouchableWithoutFeedback onPress={this.doRegister.bind(this)}>
						<View>
							<Text style={styles.register}>没有帐号，注册一个</Text>
						</View>
					</TouchableWithoutFeedback>
					</View>
					<Button
						style={styles.closeBtn}
						textStyle={styles.closeText}
						onPress={this.doClose.bind(this)}>X</Button>
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
		borderRadius: 40,
		top: 10,
		right: 10,
		backgroundColor: "rgba(240, 240, 240, 1)",
		borderWidth: 0
	},
	closeText: {
		color: "rgba(255, 0, 51, 1)",
		fontSize: 20
	}
});

module.exports = Login;