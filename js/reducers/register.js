import {SHOW_REGISTER, HIDE_REGISTER} from "../constants/ActionTypes"

const initialState = {
	visible: false
}

const registerModalReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_REGISTER:
			return Object.assign({}, state, {visible: action.visible})
		case HIDE_REGISTER:
			return Object.assign({}, state, {visible: action.visible})
		default:
			return state
	}
}

export default registerModalReducer
