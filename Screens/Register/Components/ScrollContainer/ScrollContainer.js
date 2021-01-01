import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView, ImageBackground, Text, TouchableOpacity, TextInput } from 'react-native'
import Constants from 'expo-constants'
import * as Font from 'expo-font'
import Theme from '../../../../assets/Theme'
import styles from './styles'

let customFonts = {
    'Merienda': require('../../../../assets/Merienda-Regular.ttf'),
  };

export default class ScrollContainer extends React.Component{
    state = {
        fontsLoaded: false
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }
    render(){
        return(
            <ScrollView contentContainerStyle={styles.container}>
                {
                    this.state.fontsLoaded &&
                    <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', padding: 30}}>
                        <View style={styles.formInputs}>
                            <Text style={[{fontFamily:'Merienda', fontSize: 20}, styles.welcomeText]}>
                                Create An Account
                            </Text>

                            <TextInput 
                                style={[styles.textInputStyle, {fontFamily: 'Merienda'}]}
                                placeholder='Username'
                                placeholderTextColor={Theme.Primary}
                                textAlign='left'
                            />

                            <TextInput 
                                style={[styles.textInputStyle, {fontFamily: 'Merienda'}]}
                                placeholder='Email'
                                placeholderTextColor={Theme.Primary}
                                textAlign='left'
                            />

                            <TextInput 
                                style={[styles.textInputStyle, {fontFamily: 'Merienda'}]}
                                placeholder='Phone'
                                placeholderTextColor={Theme.Primary}
                                textAlign='left'
                            />

                            <TextInput 
                                style={[styles.textInputStyle, {fontFamily: 'Merienda'}]}
                                placeholder='Password'
                                placeholderTextColor={Theme.Primary}
                                textAlign='left'
                                secureTextEntry
                            />

                            <TextInput 
                                style={[styles.textInputStyle, {fontFamily: 'Merienda'}]}
                                placeholder='Confirm Password'
                                placeholderTextColor={Theme.Primary}
                                textAlign='left'
                                editable={false}
                            />
                            <TouchableOpacity style={styles.loginButton}>
                                <Text style={styles.buttonTexts1}>Register</Text>
                            </TouchableOpacity>

                            <View>
                                <Text style={[styles.terms, {fontFamily: 'Merienda'}]}>By Signing Up you agree with our <Text style={{color: Theme.primary}}>terms and conditions</Text></Text>
                            </View>
                        </View>
                    </View>
                }
            </ScrollView>
        )
    }
}