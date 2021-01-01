import React, {useEffect} from 'react'
import { connect } from "react-redux";
import { View, StyleSheet, Dimensions, BackHandler, ImageBackground, Text, TouchableOpacity, TextInput } from 'react-native'
import Constants from 'expo-constants'
import { useFonts } from 'expo-font'

//components
import ScrollContainer from './Components/ScrollContainer/ScrollContainer'

import {
	
} from "../../Modules/Register";

const mapStateToProps = (state) => ({

});

const mapActionCreators = {
	
};

const imageBackground = require('../../assets/generalbg2.png')

const initialLayout = { width: Dimensions.get('window').width };

const Register = () => {
    let [fontsLoaded] = useFonts({
        'Merienda': require('../../assets/Merienda-Regular.ttf'),
      });
    return (
      <ImageBackground source={imageBackground} style={styles.scene}>
          <ScrollContainer />
      </ImageBackground>
    );
}
 
const styles = StyleSheet.create({
  scene: {
      flex:1
  },
  statusBar:{
      height: Constants.statusBarHeight
  }
});

export default connect(mapStateToProps, mapActionCreators)(Register);