import React, {PropTypes, Component} from 'react'
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import Dimensions from 'Dimensions'
import Button from 'apsl-react-native-button'

var width = Dimensions.get('window').width;
var height = Dimensions.get("window").height;

class HomePage extends Component {
	render() {
		const {needLogin} = this.props
		return (
			<View style={styles.home}>
				<Button style={styles.loginBtn}
					textStyle={styles.btnText}
					onPress={needLogin}>
						豆田未发现你的足迹，请登录
				</Button>
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

HomePage.propTypes = {
	needLogin: PropTypes.func.isRequired
}

export default HomePage
