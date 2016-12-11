import React, {PropTypes, Component} from "react"
import { connect } from 'react-redux'

import HomePage from "../commons/pages/HomePage"
import {showLoginModal} from "../actions/loginModal"

class HomeContainer extends Component {
	render() {
		const { dispatch } = this.props
		return (
			<HomePage needLogin={() => dispatch(showLoginModal()) } />
		)
	}
}

export default connect()(HomeContainer)