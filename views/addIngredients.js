import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import StyledButton from '../components/StyledButton';
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import IconBar from '../components/IconBar';

function addIngredients(props) {

  const Agregar = require('../assets/images/agregar.png');
  const Existentes = require('../assets/images/existentes.png');

  return (
    <View style={styles.container}>

      <TitleBar/>

      <View style={styles.iconContainer}>
        <IconBar image={Agregar} color={'#F5ACAC'}/>
        <IconBar image={Existentes} color={'#f36c6c'}/>
      </View>

      <ImageBackground source={require("../assets/images/fondo.png")} style={styles.background}>
        <View style={styles.container}/>
      </ImageBackground>

      <NavBar/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  background: {
      width:'100%',
      height:'100%',
      flex: 1, 
      justifyContent: "center" 
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
  }
});

export default addIngredients;