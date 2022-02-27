import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import NavBar from "../components/NavBar";
import SearchBart from '../components/NavSearch';

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
    flex: 1,
  },
});

export default SavedScreen;
