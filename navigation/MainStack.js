import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {View, Text, Pressable, ImageBackground, Image} from 'react-native';
import React from 'react'
import Mis_ingredientes from '../views/mis_ingredientes'
import RecipeScreen from '../views/recipe'
import styles from './styles'


const Tab = createBottomTabNavigator()

function MyTabs(){
    const home = require('../assets/images/recetaw.png');
    const profile = require('../assets/images/perfil.png');
    const bookmarks = require('../assets/images/bookmark.png');
    const newrecipe = require('../assets/images/newrecipe.png');
    const alacena = require('../assets/images/ingredW.png');
    
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#f36c6c',
                    height: 100,
                }
            }}>
            <Tab.Screen 
                name = 'Recipe' 
                component = {RecipeScreen}
                options = {{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({focused}) =>(
                        focused ? 
                        <Image source={home}
                        resizeMode="contain"
                        style = {{
                            width: 40,
                            height:40,
                        }}
                        /> :
                        <Image source={profile}
                        resizeMode="contain"
                        style = {{
                            width: 40,
                            height:40,
                        }}
                        />
                    )
                }}/>
            <Tab.Screen 
                name = 'MyIng' 
                component = {Mis_ingredientes}
                options = {{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ()=>(
                        <Image source={require('../assets/images/ingredW.png')}
                            resizeMode="contain"
                            style = {{
                                width: 40,
                                height:40,
                            }}
                        />
                    )
                }}/>
        </Tab.Navigator>
    )
}

export default function Navigation (){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
