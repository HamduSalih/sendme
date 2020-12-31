import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { Provider } from "react-redux";
import PropTypes from 'prop-types';
import createStore from "./Store/CreateStore";
import AppContainer from "./Navigation/AppContainer"

const initialState = window.___INTITIAL_STATE__;
const store = createStore(initialState);

export default function App () {
  const propTypes = {
		store: PropTypes.object.isRequired
	} 

  
      return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
      );

    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
