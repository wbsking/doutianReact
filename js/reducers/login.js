import {SHOW_LOGIN, HIDE_LOGIN} from "../constants/ActionTypes"

const initialState = {
	visible: false
}

const loginModalReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOGIN:
			return Object.assign({}, state, {visible: action.visible})
		case HIDE_LOGIN:
			return Object.assign({}, state, {visible: action.visible})
		default:
			return state
	}
}

export default loginModalReducer
