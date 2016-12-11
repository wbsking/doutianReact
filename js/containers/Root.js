import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {View} from 'react-native'

import HomeContainer from './HomeContainer'
import LoginContainer from "./loginContainer"
import RegisterContainer from "./registerContainer"

class Root extends Component {
	render() {
		return (
			<View>
				<HomeContainer />
				<LoginContainer />
				<RegisterContainer />
			</View>
		)
	}
}

export default Root