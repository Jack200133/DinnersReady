import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, ScrollView, Image  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NavBar from '../components/NavBar';
import IconBar from '../components/IconBar';
import Ingred from '../components/Ingred';
import TitleBar from '../components/TitleBar';
import Categories from '../components/Categories';

import {useEffect, useState} from 'react'


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


function AddIngredients(props) {

  const Agregar = require('../assets/images/agregar.png');
  const Existentes = require('../assets/images/existentes.png');

  const [categories, setCategories] = useState([])
  const [clicked, setClicked] = useState(categories.map(() => false))
  const [categorias, setCategorias] = useState([])
  const [change, setChange] = useState(false)

  useEffect( async () => {
    GetCategorias()
  }, [])

  
  
  useEffect( async () => {

    let oldState = []
    console.log('hola')

    categorias.forEach(async (categoria) => {
      let temp = []
      const usuario = await getData()
      let fet = "http://3.132.195.25/dinner/ingredientes/"+categoria.categoria+"/"+usuario

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
      console.log(value)
      setCategories([...oldState])
    })


  }, [categorias, change])

  const handleClick = (index) => {
      let oldState = [...clicked]
      oldState[index] = !oldState[index]
      setClicked(oldState)
  }

  const GetCategorias = async() => {
    
        
    let fet = "http://3.132.195.25/dinner/categorias"


    const response = await fetch(fet)
    .then((response) => {return response.json()}
    ).then((responseInJSON) => { return responseInJSON })
    console.log(response)
    setCategorias([...response])
  }

  const addIngrediente = async(ingredienteput, indexC, indexI) => {
    const usuario = await getData()
    console.log(usuario)
    const endpoint = 'http://3.132.195.25/dinner/ingrediente'
    const response = await fetch(endpoint, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        usuario: usuario,
        ingrediente:ingredienteput
      })
    })
    const oldState = [...categories]
    oldState[indexC].ingredients.splice(indexI, 1)
    setCategories(oldState)
    const responseJSON = await response.json()
    return responseJSON
  }


  return (
    <SafeAreaView style={styles.container}>
      
     

      <ImageBackground source={require("../assets/images/fondo.png")} style={styles.background} imageStyle={{opacity:0.2}}>
        
        

        <ScrollView style={styles.padContainer}>

          <View style ={styles.introContainer}>
                <Text style={{fontSize: 25}}> Agregar nuevos ingredientes</Text>
                <Text style={{fontSize: 15}}> Selecciona que ingredientes quieres añadir a tu colección.</Text>
          </View>
          {
            categories.map((category, index) => <Categories key = {category.name} indexC = {index} removeIngred={(text) => {}} name = {category.name} ingredients = {category.ingredients} clicked = {clicked[index]} AddIngrediente={addIngrediente} handleClick = {handleClick} />)
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
    marginBottom: 20,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#4e87b5',
    color: '#05182A',
    borderRadius: 25
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