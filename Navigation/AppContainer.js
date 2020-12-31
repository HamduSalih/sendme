import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Screens/Home'

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
//     {
//         initialRouteName: '',
//     }
)

export default createAppContainer(AppNavigator)