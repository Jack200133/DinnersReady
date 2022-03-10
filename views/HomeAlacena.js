import React from 'react';
import { StyleSheet, Text, View, ImageBackground,ScrollView } from 'react-native';

import StyledButton from '../components/StyledButton';
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import IconBar from '../components/IconBar';
import PubItem from '../components/PubItem';
import SearchBart from '../components/NavSearch';


function HomeAlacena(props) {

  const Alacena_Recipe = require('../assets/images/casitan.png');
  const Market_Recipe = require('../assets/images/cart.png');
  const Hamburguesa = require('../assets/images/hamburguesa_temporal.jpg');


  return (
    <View style={styles.container}>

      <SearchBart/>

      <View style={styles.iconContainer}>
        <IconBar image={Alacena_Recipe} color={'#F5ACAC'}/>
        <IconBar image={Market_Recipe} color={'#f36c6c'}/>
      </View>

      <ImageBackground source={require('../assets/images/fondo.png')}resizeMode="cover"style={styles.background} imageStyle={{opacity: 0.3}}>
            <ScrollView style={styles.scrollCont}>
                <View style={styles.NavegationPost}>
                    <PubItem image={Hamburguesa} NameRecipe={"Hamburguesa"} desc={"Hamburguesa deliciosa hecha en casa con ingredietes frescos"}/>
                    <PubItem image={Hamburguesa} NameRecipe={'Hamburguesa'} desc={"Hamburguesa deliciosa hecha en casa con ingredietes frescos"}/>
                    <PubItem image={Hamburguesa} NameRecipe={'Hamburguesa'} desc={"Hamburguesa deliciosa hecha en casa con ingredietes frescos"}/>
                    <PubItem image={Hamburguesa} NameRecipe={'Hamburguesa'} desc={"Hamburguesa deliciosa hecha en casa con ingredietes frescos"}/>
                </View>
            </ScrollView>
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
  NavegationPost:{
    flex: 1, 
    alignItems:'center',
    paddingHorizontal:20,
    

  },
  scrollCont: {
    flex:1,
    marginLeft:10,
    marginRight:10,
    
  }
});

export default HomeAlacena;