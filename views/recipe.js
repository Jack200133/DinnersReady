import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';

import StyledButton from '../components/StyledButton';
import NavBar from '../components/NavBar';

function RecipeScreen(props) {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/fondo.png')}
            resizeMode="cover"
            style={styles.back}>
        <View style={styles.padContainer}>
          <ScrollView style={styles.scrollCont}>
            <Text style={styles.text}>Ingresa tu nueva receta</Text>
          </ScrollView>
        </View>
      </ImageBackground>
      <NavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  padContainer: {
    flex:1,
    paddingHorizontal: 10,
    paddingTop: 180,
    paddingBottom: 20
  },
  back:{
    width: '100%',
    height: '100%',
    flex: 1, 
    justifyContent: "center",
    opacity: 0.3
  },
  scrollCont: {
    flex:1,
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    padding: 30
  },
  text: {
    fontFamily: 'PFD',
    fontSize: 30,
    color: 'black'
  }
});

export default RecipeScreen;