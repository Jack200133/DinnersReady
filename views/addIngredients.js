import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, ScrollView, Image  } from 'react-native';

import NavBar from '../components/NavBar';
import IconBar from '../components/IconBar';
import Ingred from '../components/Ingred';
import TitleBar from '../components/TitleBar';
import Categories from '../components/Categories';

import {useEffect, useState} from 'react'

function AddIngredients(props) {

  const Agregar = require('../assets/images/agregar.png');
  const Existentes = require('../assets/images/existentes.png');

  const [categories, setCategories] = useState([])
  const [clicked, setClicked] = useState(categories.map(() => false))
  const [categorias, setCategorias] = useState([])

  useEffect( async () => {
    GetCategorias()
  }, [])

  
  useEffect( async () => {

    let oldState = [...categories]

    categorias.forEach(async (categoria) => {
      let temp = []

      let fet = "http://localhost:5000/ingredientes/"+categoria.categoria

      const response = await fetch(fet)
      .then((response) => {return response.json()}
      ).then((responseInJSON) => { return responseInJSON })

      const r = [...response]

      r.forEach(element => {
        temp.push(element.nombre)
      })

      const value = {
        name: categoria.categoria,
        ingredients: [...temp]
      }
      
      oldState.push(value)
      setCategories([...oldState])
    })


  }, [categorias])

  const handleClick = (index) => {
      let oldState = [...clicked]
      oldState[index] = !oldState[index]
      setClicked(oldState)
  }

  const GetCategorias = async() => {
    
        
    let fet = "http://localhost:5000/categorias"


    const response = await fetch(fet)
    .then((response) => {return response.json()}
    ).then((responseInJSON) => { return responseInJSON })
    setCategorias([...response])

  }


  return (
    <SafeAreaView style={styles.container}>
      
     

      <ImageBackground source={require("../assets/images/fondo.png")} style={styles.background} imageStyle={{opacity:0.2}}>
        
        

        <ScrollView style={styles.padContainer}>

          <View style ={styles.introContainer}>
                <Text style={{fontSize: 40,color: 'black'}}> Agregar nuevos ingredientes</Text>
                <Text style={{fontSize: 20,color: 'black'}}> Selecciona que ingredientes quieres añadir a tu colección.</Text>
          </View>
          {
            categories.map((category, index) => <Categories key = {category.name} index = {index} name = {category.name} ingredients = {category.ingredients} clicked = {clicked[index]} handleClick = {handleClick}/>)
          }

          
        </ScrollView>
        
      </ImageBackground>

    </SafeAreaView>
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
    flexWrap: 'wrap'
  },
  padContainer: {
    flex:1,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
  scrollCont: {
    flex:1,
    backgroundColor: '#6F6861',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    padding: 30,
    height: '100%'
  },
  text: {
    fontSize: 30,
    color: 'white'
  },
  introContainer:{
    paddingLeft: 20,
    marginBottom: 20
  },
  arrow:{
    justifyContent: 'flex-end',
    alignSelf:'center',
    width: '25%',
    height: '40%', 
    resizeMode: 'contain',
  }
});

export default AddIngredients;