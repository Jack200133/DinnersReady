import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavHome from '../components/NavHome/homeStack';
import SearchBart from '../components/NavSearch';
export default function Home() {
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