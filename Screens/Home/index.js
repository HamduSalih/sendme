import React, {useEffect} from 'react'
import { connect } from "react-redux";
import { View, StyleSheet, Dimensions, BackHandler, ImageBackground, Text, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'

import {
	
} from "../../Modules/Home";

const mapStateToProps = (state) => ({

});

const mapActionCreators = {
	
};

const imageBackground = require('../../assets/home.png')

const initialLayout = { width: Dimensions.get('window').width };

const Home = () => {
    return (
      <ImageBackground source={imageBackground} style={styles.scene}>
        <View style={styles.statusBar}></View>

        <View style={styles.touchablesView}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonTexts1}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.buttonTexts2}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  statusBar:{
      height: Constants.statusBarHeight
  },
  touchablesView:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton:{
    marginVertical: 10,
    width: '90%',
    marginHorizontal: 5,
    backgroundColor: '#09135b',
    paddingVertical: 15
  },
  registerButton:{
    marginBottom: 20,
    width: '90%',
    marginHorizontal: 5,
    paddingVertical: 15,
    borderColor: 'white',
    borderWidth: 2
  },
  buttonTexts1:{
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center', 
    fontSize: 15
  },
  buttonTexts2:{
    color: '#09135b',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center', 
    fontSize: 15
  }
});

export default connect(mapStateToProps, mapActionCreators)(Home);