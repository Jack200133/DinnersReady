import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {View, Text, Pressable, ImageBackground, Image} from 'react-native';

import React from 'react'

import Mis_ingredientes from '../../views/mis_ingredientes';
import AddIngredients from '../../views/addIngredients';



const Tab = createMaterialTopTabNavigator()

export default function NavIngredients(){
    const Agregar = require('../../assets/images/agregar.png');
    const Existentes = require('../../assets/images/existentes.png');
    
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
                name = 'Alacena' 
                component = {Mis_ingredientes}
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
                name = 'AddIng' 
                component = {AddIngredients}
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

/*
export default function NavigationIng(){
    return(
        <NavigationContainer>
            <NavIngredients />
        </NavigationContainer>
    )
}*/
