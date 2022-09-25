import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import Navigation from './navigation/MainStack';
import LogIn from './views/LogIn';
import SignIn from './views/signIn';
import RecipeScreen from './views/recipe';
import HomeAlacena from './views/HomeAlacena';
import RecipeView from './views/recipeView';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFonts';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import AppP from './views/App';

export default function App() {
 return (<AppP />)
}