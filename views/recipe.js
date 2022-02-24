import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import StyledButton from '../components/StyledButton';
import NavBar from '../components/NavBar';

function RecipeScreen(props) {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.container}/>
      <NavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});

export default RecipeScreen;