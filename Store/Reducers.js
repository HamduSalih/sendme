import { combineReducers } from "redux";
import { HomeReducer as home } from '../Modules/Home'

export const makeRootReducer = () => {
	return combineReducers({
		home
	});
}

export default makeRootReducer;