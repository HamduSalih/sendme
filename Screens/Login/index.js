import React, {useEffect} from 'react'
import { connect } from "react-redux";
import { View, StyleSheet, Dimensions, BackHandler, ImageBackground, Text, TouchableOpacity, TextInput } from 'react-native'
import Constants from 'expo-constants'
import { useFonts } from 'expo-font'
import Theme from '../../assets/Theme'

import {
	
} from "../../Modules/Login";

const mapStateToProps = (state) => ({

});

const mapActionCreators = {
	
};

const imageBackground = require('../../assets/generalbg.png')

const initialLayout = { width: Dimensions.get('window').width };

const Login = () => {
    let [fontsLoaded] = useFonts({
        'Merienda': require('../../assets/Merienda-Regular.ttf'),
      });
    return (
      <ImageBackground source={imageBackground} style={styles.scene}>
        <View style={styles.statusBar}></View>

            {
                fontsLoaded &&
                <View style={styles.loginView}>
                    <Text style={styles.welcomeText}>You are welcome</Text>

                    <View style={{width: '100%'}}>
                        <TextInput 
                            style={styles.textInputStyle}
                            placeholder='Username'
                            placeholderTextColor={Theme.white}
                            textAlign='left'
                        />
                    </View>
                    <View style={{width: '100%'}}>
                        <TextInput 
                            style={styles.textInputStyle}
                            placeholder='Password'
                            placeholderTextColor={Theme.white}
                            textAlign='left'
                            secureTextEntry={true}
                        />
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.btnText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            }
      </ImageBackground>
    );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusBar:{
      height: Constants.statusBarHeight
  },
  loginView:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'
  },
  welcomeText:{
    fontFamily: 'Merienda',
    fontSize: 25,
    color: Theme.white
  }, 
  textInputStyle:{
      borderBottomColor: Theme.white,
      borderBottomWidth: 1,
      width: '100%',
      paddingVertical: 5,
      paddingHorizontal: 5,
      color: Theme.white,
      marginVertical: 10,
      color: Theme.white,
      fontFamily: 'Merienda',
      fontSize: 15
  },
  forgotPassword:{
      color: Theme.white,
      marginTop: 10,
      marginBottom: 20
  },
  loginBtn:{
      backgroundColor: Theme.white,
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal: 5
  },
  btnText:{
      textAlign: 'center',
      fontSize: 20,
      fontFamily: 'Merienda'
  }
});

export default connect(mapStateToProps, mapActionCreators)(Login);