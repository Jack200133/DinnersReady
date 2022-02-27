import React from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView } from "react-native";

import NavBar from "../components/NavBar";
import SearchBart from '../components/NavSearch';
import PubItem from '../components/PubItem';

function SavedScreen() {
  return (
    <View style={styles.container}>
      <SearchBart/>
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

      <View style={styles.container} />
      <NavBar />
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
export default SavedScreen;
