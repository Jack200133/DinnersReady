import React from 'react';
import { StyleSheet, Text, View, ImageBackground,ScrollView } from 'react-native';

import StyledButton from '../components/StyledButton';
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import IconBar from '../components/IconBar';
import PubItem from '../components/PubItem';
import SearchBart from '../components/NavSearch';


function HomeNuevo(props) {

  const Alacena_Recipe = require('../assets/images/casitan.png');
  const Market_Recipe = require('../assets/images/cart.png');
  const Hamburguesa = require('../assets/images/hamburguesa_temporal.jpg');
  const Saved = require('../assets/images/bookmark.png')
  const Savednt = require('../assets/images/bookmark.png')


  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/images/fondo.png')}resizeMode="cover"style={styles.background} imageStyle={{opacity: 0.3}}>
            <ScrollView style={styles.scrollCont}>
                <View style={styles.NavegationPost}>
                    <PubItem image={Hamburguesa} color ={colors('facil')} dificultad={'Fácil'} saved={false ? Saved:Savednt} NameRecipe={"Hamburguesa"} stars ={"3.5"} hash={'#love'} desc={"Hamburguesa deliciosa hecha en casa con ingredietes frescos"} autor={'autor'}/>
                    <PubItem image={Hamburguesa} color ={colors('dificil')} dificultad={'Difícil'} saved={false ? Saved:Savednt} NameRecipe={"Hamburguesa"} stars ={"3.5"} hash={'#love'} desc={"Hamburguesa deliciosa hecha en casa con ingredietes frescos"} autor={'autor'}/>
                    <PubItem image={Hamburguesa} color ={colors('intermedio')} dificultad={'Medio'} saved={false ? Saved:Savednt} NameRecipe={"Hamburguesa"} stars ={"3.5"} hash={'#love'} desc={"Hamburguesa deliciosa hecha en casa con ingredietes frescos"} autor={'autor'}/>
                    <PubItem image={Hamburguesa} color ={colors('facil')} dificultad={'Fácil'} saved={false ? Saved:Savednt}NameRecipe={"Hamburguesa"} stars ={"3.5"} hash={'#love'} desc={"Hamburguesa deliciosa hecha en casa con ingredietes frescos"} autor={'autor'}/>
                </View>
            </ScrollView>
      </ImageBackground>

    </View>
  );
}

const colors = (dif) =>{
  let color = ''
  if(dif === "facil"){
    color = '#4ECF66'
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

export default HomeNuevo;