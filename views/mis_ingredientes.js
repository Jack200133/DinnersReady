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

      

      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/fondo.png')}
              resizeMode="cover"
              style={styles.back}
              imageStyle={{opacity: 0.2}}>
          <View style={styles.padContainer}>
            <ScrollView style={styles.scrollCont}>
              <Text style={styles.text}>Mis Ingredientes</Text>
              <View style={styles.iconContainer}>
                <Ingred text={'Zanahoria'} />
                <Ingred text={'Pepino'}/>
                <Ingred text={'Tomate'}/>
                <Ingred text={'Brocoli'}/>
                <Ingred text={'Elote'}/>
                <Ingred text={'Papa'}/>
                <Ingred text={'Arroz'}/>
                <Ingred text={'Frijol'}/>
                <Ingred text={'Queso'}/>
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
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
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