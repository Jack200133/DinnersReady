import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image  } from 'react-native';

import StyledButton from '../components/StyledButton';
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import IconBar from '../components/IconBar';
import Ingred from '../components/Ingred';

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

      <ImageBackground source={require("../assets/images/fondo.png")} style={styles.background} imageStyle={{opacity:0.2}}>
        
        

        <View style={styles.padContainer}>

          <View style ={styles.introContainer}>
                <Text style={{fontSize: 40,color: 'black'}}> Agregar nuevos ingredientes</Text>
                <Text style={{fontSize: 20,color: 'black'}}> Selecciona que ingredientes quieres añadir a tu colección.</Text>
          </View>
            
          <ScrollView style={styles.scrollCont}>
            <Text style={styles.text}>Vegetales</Text>

            <View style={styles.iconContainer}>

              <Ingred text={'Zanahoria'}/>
              <Ingred text={'Pepino'}/>
              <Ingred text={'Tomate'}/>
              <Ingred text={'Elote'}/>
              <Ingred text={'Papa'}/>
              <Ingred text={'Brocoli'}/>

            </View>
          </ScrollView>
          
        </View>

        <View style={styles.padContainer}>

          <View style={styles.ingredView}>
            <Text style={{fontSize: 20,color: '#4F4F4F', paddingLeft:20}}>Carne</Text>
            <Image style={styles.arrow} source={require('../assets/images/arrow.png')}></Image>
          </View>

          <View style={styles.ingredView}>
            <Text style={{fontSize: 20,color: '#4F4F4F', paddingLeft:20}}>Frutas</Text>
            <Image style={styles.arrow} source={require('../assets/images/arrow.png')}></Image>
          </View>

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
    flexWrap: 'wrap'
  },
  padContainer: {
    flex:1,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10
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
  },
  introContainer:{
    paddingLeft: 20,
    marginBottom: 20
  },
  ingredView: {
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EEEEEE',
    height: 50,
    borderRadius: 30,
    marginBottom:10,
  },
  arrow:{
    justifyContent: 'flex-end',
    alignSelf:'center',
    width: '25%',
    height: '40%', 
    resizeMode: 'contain',
  }
});

export default addIngredients;