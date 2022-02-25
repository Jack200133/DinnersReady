import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeAlacena from './views/HomeAlacena';

export default function App() {
  return (
    <HomeAlacena/>
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
