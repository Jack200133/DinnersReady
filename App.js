import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RecipeScreen from './views/recipe';
import AddIngredientsScreen from './views/addIngredients'

export default function App() {
  return (
    <AddIngredientsScreen/>
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
