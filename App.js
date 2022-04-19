import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/MainStack';
import LogIn from './views/logIn';
import SignIn from './views/signIn';
import RecipeScreen from './views/recipe';
import HomeAlacena from './views/HomeAlacena';

export default function App() {
  return (
    <SignIn/>
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
