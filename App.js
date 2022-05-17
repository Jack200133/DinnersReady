import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/MainStack';
import LogIn from './views/LogIn';
import SignIn from './views/signIn';
import RecipeScreen from './views/recipe';
import HomeAlacena from './views/HomeAlacena';
import RecipeView from './views/recipeView';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

const Stack = createStackNavigator();

export default function App() {
  const style = {
    headerTitle:null,
    headerTransparent:true,
    headerLeft: null
  }
  return (
    //<Navigation/>
    <NavigationContainer >

      <Stack.Navigator screenOptions={style}>

        <Stack.Screen options={{headerBackTitleVisible: false}} name="Login" component={LogIn}/>
        <Stack.Screen options={{headerBackTitleVisible: false}} name="Register" component={SignIn}/>
        <Stack.Screen options={{headerBackTitleVisible: false}} name="Navigation" component={Navigation}/>
        <Stack.Screen options={{headerBackTitleVisible: false}} name="Recipe" component={RecipeView}/>

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
