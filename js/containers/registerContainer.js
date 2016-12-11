import React, {PropTypes, Component} from "react"
import { connect } from 'react-redux'

import Register from "../commons/accessIn/Register"
import {getRegisterVisible} from "../reducers/app"
import {showLoginModal} from "../actions/loginModal"
import {showRegisterModal, hideRegisterModal} from "../actions/registerModal"


class RegisterContainer extends Component {
	showLogin = () => {
		const {dispatch} = this.props
		dispatch(showLoginModal())
		dispatch(hideRegisterModal())
	}

	render() {
		const { dispatch, visible } = this.props
		return (
			<Register
				visible={visible}
				modalClose={() => dispatch(hideRegisterModal())}
				showLogin={this.showLogin.bind(this)}
			/>
		)
	}
}

RegisterContainer.propTypes = {
	visible: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
	console.log(state)
	return {visible: getRegisterVisible(state)}
}

export default connect(mapStateToProps)(RegisterContainer)