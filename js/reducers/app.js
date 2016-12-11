import { combineReducers } from "redux"
import loginModalReducer from "./login"
import registerModalReducer from "./register"

const AppReducer = combineReducers({
	loginModalReducer, registerModalReducer
})

export default AppReducer

export const getLoginVisiable = (state) => {
	return state.loginModalReducer.visible
}

export const getRegisterVisible = (state) => {
	return state.registerModalReducer.visible
}