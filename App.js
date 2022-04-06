import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/MainStack';

import RecipeScreen from './views/recipe';
import HomeAlacena from './views/HomeAlacena';
import LogIn from './views/LogIn';
import SignIn from './views/signIn';

export default function App() {
  return (
    <RecipeScreen/>
    
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
