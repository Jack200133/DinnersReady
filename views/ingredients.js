import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavIngredients from '../components/navIng/navStack';
import TitleBar from '../components/TitleBar';

export default function Ingredients() {
  return (
    <View style = {styles.container}>
        <TitleBar/>
        <NavIngredients/>
    </View>
      
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});
