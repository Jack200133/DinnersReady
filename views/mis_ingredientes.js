import React from 'react';
import { StyleSheet, Text, View, ImageBackground,SafeAreaView,ScrollView } from 'react-native';

import StyledButton from '../components/StyledButton';
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import IconBar from '../components/IconBar';
import Ingred from '../components/Ingred';

function Mis_ingredientes(props) {

  const Agregar = require('../assets/images/agregar.png');
  const Existentes = require('../assets/images/existentes.png');

  return (
    <View style={styles.container}>

      <TitleBar/>

      <View style={styles.iconContainer}>
        <IconBar image={Agregar} color={'#f36c6c'}/>
        <IconBar image={Existentes} color={'#F5ACAC'}/>
      </View>

      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/fondo.png')}
              resizeMode="cover"
              style={styles.back}
              imageStyle={{opacity: 0.5}}>
          <View style={styles.padContainer}>
            <ScrollView style={styles.scrollCont}>
              <Text style={styles.text}>Mis Ingredientes</Text>
              <View style={styles.iconContainer}>
                <Ingred text={'Zanahoria'} color={'#EEE9E9'}/>
                <Ingred text={'Pepino'} color={'#EEE9E9'}/>
                <Ingred text={'Tomate'} color={'#EEE9E9'}/>
              </View>
              <View style={styles.iconContainer}>
                <Ingred text={'Brocoli'} color={'#EEE9E9'}/>
                <Ingred text={'Elote'} color={'#EEE9E9'}/>
                <Ingred text={'Papa'} color={'#EEE9E9'}/>
              </View>


            </ScrollView>
          </View>
        </ImageBackground>
        </View>

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
  back:{
    width: '100%',
    height: '100%',
    flex: 1, 
    justifyContent: "center",
  },
  padContainer: {
    flex:1,
    padding:40
  },
  scrollCont: {
    flex:1,
    backgroundColor: '#6F6861',
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