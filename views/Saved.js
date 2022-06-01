import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView } from "react-native";

import NavBar from "../components/NavBar";
import SearchBart from '../components/NavSearch';
import PubItem from '../components/PubItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SavedScreen(props) {
  const Hamburguesa = require('../assets/images/hamburguesa_temporal.jpg');
  const Saved = require('../assets/images/bookmark.png')
  const Savednt = require('../assets/images/bookmarkN.png')
  return (
    <View style={styles.container}>
      <SearchBart/>
      <ImageBackground source={require('../assets/images/fondo.png')}resizeMode="cover"style={styles.background} imageStyle={{opacity: 0.3}}>
            <ScrollView style={styles.scrollCont}>
                <View style={styles.NavegationPost}>
                  {
                    saved.map((e) =>
                      <PubItem key={e.id} image={e.imagen} color ={colors(e.dificultad)} dificultad={e.dificultad} saved={true ? Saved:Savednt} NameRecipe={e.nombre} stars ={e.estrellas} hash={'#love'} desc={e.descripcion} autor={e.autor} navigation = {props.navigation}/>
                    )
                  }
                </View>
            </ScrollView>
      </ImageBackground>
    </View>
  );
}


const colors = (dif) =>{
  let color = ''
  if(dif === "facil"){
    color = 'green'
  }else if(dif==='intermedio'){
    color = 'orange'
  }else{
    color = 'red'
  }

  return color
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
    height:1400, 
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
