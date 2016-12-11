import React, {PropTypes, Component} from "react"
import { connect } from 'react-redux'

import Login from "../commons/accessIn/Login"
import {getLoginVisiable} from "../reducers/app"
import {showLoginModal, hideLoginModal} from "../actions/loginModal"
import {showRegisterModal} from "../actions/registerModal"


class LoginContainer extends Component {

	showRegister = () => {
		const {dispatch} = this.props
		dispatch(showRegisterModal())
		dispatch(hideLoginModal())
	}

	render() {
		const { dispatch, visible } = this.props
		return (
			<Login
				visible={visible}
				modalClose={() => dispatch(hideLoginModal())}
				showRegister={this.showRegister.bind(this)}
			/>
		)
	}
}

LoginContainer.propTypes = {
	visible: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
	return {visible: getLoginVisiable(state)}
}

export default connect(mapStateToProps)(LoginContainer)