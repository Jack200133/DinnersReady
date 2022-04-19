import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {View, Text, Pressable, ImageBackground, Image} from 'react-native';

import React from 'react'

import MiHalacena from '../../views/HomeAlacena';
import MiHomeFuture from '../../views/homeFuture';



const Tab = createMaterialTopTabNavigator()

export default function NavHome(){
    const Existentes = require('../../assets/images/casita.png');
    const Agregar = require('../../assets/images/cart.png');
    
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#f36c6c',
                    height: 60,
                },
                tabBarIndicatorStyle:{
                    backgroundColor:'#F5ACAC',
                    height: 100
                }
            }}>
            <Tab.Screen 
                name = 'HAlacena' 
                component = {MiHalacena}
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
                name = 'HFuture' 
                component = {MiHomeFuture}
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