import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {View, Text, Pressable, ImageBackground, Image} from 'react-native';

import React from 'react'

import HomeAlacena from '../../views/HomeAlacena';
import HomeNuevo from '../../views/HomeNuevo';  


const Tab = createMaterialTopTabNavigator()

export default function NavHome(){
    const Agregar = require('../../assets/images/cart.png');
    const Existentes = require('../../assets/images/casita.png');
    
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#3D6A8F',
                    height: 60,
                },
                tabBarIndicatorStyle:{
                    backgroundColor:'#5EA3DB',
                    height: 100
                }
            }}>
            <Tab.Screen 
                name = 'Recetas' 
                component = {HomeAlacena}
                options = {{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ()=>(
                        <Image source={Existentes}
                            resizeMode="contain"
                            style = {{
                                width: 40,
                                height: 35,
                            }}
                        />
                    )
                }}/>
            <Tab.Screen 
                name = 'RecetasNuevas' 
                component = {HomeNuevo}
                options = {{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({focused}) =>(
                        <Image source={Agregar}
                        resizeMode="contain"
                        style = {{
                            width: 40,
                            height:35,
                        }}/>
                    )
                }}/>
        </Tab.Navigator>
    )
}
