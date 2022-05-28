import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground,SafeAreaView,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import StyledButton from '../components/StyledButton';
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import IconBar from '../components/IconBar';
import Ingred from '../components/Ingred';

function Mis_ingredientes(props) {

  const Agregar = require('../assets/images/agregar.png');
  const Existentes = require('../assets/images/existentes.png');

  const [ingredientes, setIngredientes] = React.useState([]);

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


  const getIngredientes = async() => {

    const usuario = await getData()
    let fet = "http://3.132.195.25/dinner/ingredientes/"+usuario

    const response = await fetch(fet)
    .then((response) => {return response.json()}
    ).then((responseInJSON) => { return responseInJSON })

    setIngredientes([...response])
  }

  const removeIngred = async(nombre_ingrediente) => {
    const usuario = await getData()


    let fet = "http://3.132.195.25/dinner/ingredientes/"+usuario+"/"+nombre_ingrediente

    const response = await fetch(fet, { method: 'DELETE' })
    .then((response) => {return response.json()}
    ).then((responseInJSON) => { return responseInJSON })

    getIngredientes()

  } 

  useEffect( () => {
    console.log('adios')
    getIngredientes()
    
  }, [])

  return (
    <View style={styles.container}>

      
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/fondo.png')}
              resizeMode="cover"
              style={styles.back}
              imageStyle={{opacity: 0.2}}>
          <View style={styles.padContainer}>
            <ScrollView style={styles.scrollCont}>
              <Text style={styles.text}>Mis Ingredientes</Text>
              <View style={styles.iconContainer}>
                {ingredientes.map((ingredient, index) => 
                  <Ingred key={index.id} text = {ingredient.nombre_ingrediente} index = {index} AddIngrediente={(text,IndexC,index) => {}} removeIngred = {removeIngred} />
                )}
              </View>
              


            </ScrollView>
          </View>
        </ImageBackground>
        </View>

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
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  back:{
    width: '100%',
    height: '100%',
    flex: 1, 
    justifyContent: "center",
  },
  padContainer: {
    flex:1,
    padding:20
  },
  scrollCont: {
    flex:1,
    backgroundColor: '#4E87B5',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 2,
    padding: 30
  },
  text: {
    fontSize: 30,
    color: 'white'
  }
});

export default Mis_ingredientes;