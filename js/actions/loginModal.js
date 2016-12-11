import {SHOW_LOGIN, HIDE_LOGIN} from "../constants/ActionTypes"

export function showLoginModal(){
	return {type: SHOW_LOGIN, visible: true}
}

export function hideLoginModal(){
	return {type: HIDE_LOGIN, visible: false}
}