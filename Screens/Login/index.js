import React, {useEffect} from 'react'
import { connect } from "react-redux";
import { View, StyleSheet, Dimensions, BackHandler, ImageBackground, Text, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'

import {
	
} from "../../Modules/Login";

const mapStateToProps = (state) => ({

});

const mapActionCreators = {
	
};

const imageBackground = require('../../assets/generalbg.png')

const initialLayout = { width: Dimensions.get('window').width };

const Login = () => {
    return (
      <ImageBackground source={imageBackground} style={styles.scene}>
        <View style={styles.statusBar}></View>

        <View>
            <Text>Hello World</Text>
        </View>

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
  }
});

export default connect(mapStateToProps, mapActionCreators)(Login);