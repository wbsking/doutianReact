import { combineReducers } from 'redux'
import {SHOW_LOGIN, HIDE_LOGIN} from "../constants/ActionTypes"

const initialState = {
	visibile: HIDE_LOGIN
}

const loginModalState = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOGIN:
			return Object.assign({}, state, {visibile: action.visibile})
		case HIDE_LOGIN:
			return
		default:
			return state
	}
}

export default loginModalState;
