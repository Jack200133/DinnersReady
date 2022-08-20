import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const Saved = require('../assets/images/bookmark.png')
  const Savednt = require('../assets/images/bookmarkN.png')

  const [recetas, setRecetas] = React.useState([])
  const [savedrecipe, setSaved] = React.useState([])


  const getData = async () => {
    try {

      const value = await AsyncStorage.getItem('@Usuario')
      if(value !== null) {
        return value
      }
    } catch(e) {
      // error reading value
    }
  }

  const clickHandler = (id) =>{
    if(savedrecipe.length != 0){
      console.log('ID',id)
      
      if (savedrecipe.includes(id)){
        setSaved(savedrecipe.filter(e => e !== id))
      }
      else if(id!==undefined){
        setSaved([...savedrecipe, id])
      }
    }
  }
  

  useEffect( async () => {
      const usuario = await getData()
      const url = 'http://3.132.195.25/dinner/recetas'
      const response = await fetch(url, {
        method: 'GET'
      })
      const responseJSON = await response.json()
      await setRecetas(responseJSON)

      const url2 = 'http://3.132.195.25/dinner/save/'+usuario
      const response2 = await fetch(url2, {
        method: 'GET'
      })
      const responseJSON2 = await response2.json()
      let temp = []
      responseJSON2.map((idx)=> temp.push(idx.id))
      setSaved(temp)

    },[savedrecipe])
    
      
    console.log(savedrecipe)

  return (
    
    <View style={styles.container}>


      <ImageBackground source={require('../assets/images/fondo.png')}resizeMode="cover"style={styles.background} imageStyle={{opacity: 0.3}}>
            <ScrollView style={styles.scrollCont}>
                <View style={styles.NavegationPost}>
                  {
                    
                    recetas.map((e) => 
                    <PubItem id={e.id} key={e.id}
                      image={e.imagen} 
                      color ={colors(e.dificultad)} 
                      dificultad={e.dificultad} 
                      saved={savedrecipe.includes(e.id) ? Saved:Savednt}
                      cH={clickHandler} 
                      NameRecipe={e.nombre} 
                      stars ={e.estrellas} 
                      hash={'#love'} 
                      desc={e.descripcion} 
                      autor={e.autor} 
                      navigation = {props.navigation}/>)
                  }
                </View> 
            </ScrollView>
      </ImageBackground>

    </View>
  );
}

const colors = (dif) =>{
  let color = ''
  if(dif === "Fácil"){
    color = '#5DE8F0'
  }else if(dif==='Medio'){
    color = '#5AE6C6'
  }else{
    color = '#5A6FE6'
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

export default HomeAlacena;