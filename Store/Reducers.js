import { combineReducers } from "redux";
import { HomeReducer as home } from '../Modules/Home'
import { LoginReducer as login } from '../Modules/Login'
import { RegisterReducer as register } from '../Modules/Register'

export const makeRootReducer = () => {
	return combineReducers({
		home,
		login,
		register
	});
}

export default makeRootReducer;