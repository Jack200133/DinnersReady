import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView  } from 'react-native';

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
        
        <View style={styles.padContainer}>
            
            <ScrollView style={styles.scrollCont}>
              <Text style={styles.text}>Agregar ingredientes</Text>
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
  background: {
      width:'100%',
      height:'100%',
      flex: 1, 
      justifyContent: "center"
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
  },
  padContainer: {
    flex:1,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20
  },
  scrollCont: {
    flex:1,
    backgroundColor: '#6F6861',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    padding: 30
  },
  text: {
    fontSize: 30,
    color: 'white'
  }
});

export default addIngredients;