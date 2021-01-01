import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Screens/Home'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import Theme from '../assets/Theme'

const AppNavigator = createStackNavigator({
//     SearchScreen:{
//         screen: Search,
//         navigationOptions:{
//             headerShown: false
//         }
//     },
    Home:{
        screen: Home,
        navigationOptions:{
            headerLeft: ()=>null,
            headerShown: false
        }
    },
    Login: {
        screen: Login,
        navigationOptions:{
            //headerLeft: ()=>null,
            //headerShown: false
            headerStyle: {
                backgroundColor: Theme.secondary,
            },
            headerTintColor: Theme.white,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    },
    Register: {
        screen: Register,
        navigationOptions:{
            //headerLeft: ()=>null,
            //headerShown: false
            headerStyle: {
            },
            headerTintColor: Theme.primary,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
//     AddProperty:{
//         screen: AddProperty,
//         navigationOptions:{
//             headerLeft: ()=>null,
//             headerShown: true,
//             title: 'Add Property',
//             headerStyle: {
//                 backgroundColor: '#252A37',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 color: '#F4D529',
//             },
//         }
//     },
    },
    {
        initialRouteName: 'Register',
    }
)

export default createAppContainer(AppNavigator)