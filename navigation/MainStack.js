import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {View, Text, Pressable, ImageBackground, Image} from 'react-native';

import React from 'react'

import Mis_ingredientes from '../views/mis_ingredientes'
import RecipeScreen from '../views/recipe'
import SavedScreen from '../views/Saved'
import ProfileScreen from '../views/profile'
import Ingredients from '../views/ingredients';
import Homes from '../views/homes';

import styles from './styles'


const Tab = createBottomTabNavigator()

export default function MyTabs(){
    const home = require('../assets/images/recetaw.png');
    const profile = require('../assets/images/perfil.png');
    const bookmarks = require('../assets/images/bookmark.png');
    const newrecipe = require('../assets/images/newrecipe.png');
    const alacena = require('../assets/images/ingredW.png');
    
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#3D6A8F',
                    height: 100,
                }
            }} initialRouteName="home">
            <Tab.Screen 
                name = 'MyIng' 
                component = {Ingredients}
                options = {{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ()=>(
                        <Image source={alacena}
                            resizeMode="contain"
                            style = {{
                                width: 40,
                                height:40,
                            }}
                        />
                    )
                }}/>
            <Tab.Screen 
                name = 'Recipe' 
                component = {RecipeScreen}
                options = {{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({focused}) =>(
                        <Image source={newrecipe}
                        resizeMode="contain"
                        style = {{
                            width: 40,
                            height:40,
                        }}/>
                    )
                }}/>
            <Tab.Screen 
                name = 'home' 
                component = {Homes}
                options = {{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ()=>(
                        <Image source={home}
                            resizeMode="contain"
                            style = {{
                                width: 40,
                                height:40,
                            }}
                        />
                    )
                }}/>
             <Tab.Screen 
                name = 'bookmarks' 
                component = {SavedScreen}
                options = {{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ()=>(
                        <Image source={bookmarks}
                            resizeMode="contain"
                            style = {{
                                width: 40,
                                height:40,
                            }}
                        />
                    )
                }}/>
            <Tab.Screen 
                name = 'profile' 
                component = {ProfileScreen}
                options = {{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ()=>(
                        <Image source={profile}
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

/*export default function Navigation (){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}*/
