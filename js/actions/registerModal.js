import {SHOW_REGISTER, HIDE_REGISTER} from "../constants/ActionTypes"

export function showRegisterModal(){
	console.log(">>>>>>>>>>>>")
	return {type: SHOW_REGISTER, visible: true}
}

export function hideRegisterModal(){
	return {type: HIDE_REGISTER, visible: false}
}