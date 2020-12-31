import { combineReducers } from "redux";
import { HomeReducer as home } from '../Modules/Home'
import { LoginReducer as login } from '../Modules/Login'

export const makeRootReducer = () => {
	return combineReducers({
		home,
		login
	});
}

export default makeRootReducer;