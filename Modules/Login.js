import update from "react-addons-update";
import constants from "../ActionConstants/Login";
//helps you get latidue delta from main size of window
import { Dimensions, AsyncStorage } from "react-native"
// import * as firebase from 'firebase';
// import 'firebase/firestore';

// var firebaseConfig = {
//     apiKey: "AIzaSyCwJKv9MAjUBlmuQ9lsTIoiSPxA71kX7LA",
//     authDomain: "brafie-f1c1e.firebaseapp.com",
//     databaseURL: "https://brafie-f1c1e.firebaseio.com",
//     projectId: "brafie-f1c1e",
//     storageBucket: "brafie-f1c1e.appspot.com",
//     messagingSenderId: "371009742341",
//     appId: "1:371009742341:web:25f6089aba05683be45e6c",
//     measurementId: "G-WPP9C5WPCM"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//--------------------
//Constants
//--------------------
//THESE ARE ACTIONS CONSTANTS THEY SHOULD BE CALLED 
//IN actionConstants.js
const { 
	
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------


//--------------------
//Action Handlers
//--------------------


const ACTION_HANDLERS = {
}
const initialState = {
};

export function LoginReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}