import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavIngredients from '../components/navIng/navStack';
import TitleBar from '../components/TitleBar';
import NavHome from '../components/NavHome/NavStack';
import SearchBart from '../components/NavSearch';

export default function Homes() {
  return (
    <View style = {styles.container}>
        <SearchBart/>
        <NavHome/>
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