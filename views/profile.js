import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';

import StyledButton from '../components/StyledButton';
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar'

function ProfileScreen(props) {

  return (
    <View style={styles.container}>
      <TitleBar/>
      <ImageBackground source={require('../assets/images/fondo.png')} resizeMode="cover" style={styles.back} imageStyle={{opacity: 0.3}}>
        <View style={styles.userbox}>
          <Image source={require('../assets/images/chef.jpg')} style = {styles.profilepic}></Image>
          <View style={styles.usernombre}>
            <Text style = {styles.usernamettitle}>Juan Ignacio Ramirez</Text>
            <Text style = {styles.descripcion}>Soy un chef graduado de la academia de cocina Le Cordon Bleu en Perú, listo para compartir contigo todo lo que se.</Text>
          </View>
        </View>
        <View style={styles.userbox1}>
          <Text style = {styles.misrecetas}>Mis Recetas</Text>
          <ScrollView style = {styles.scrollCont}>
            <Text style = {styles.recetas}>-Rellenitos de Frijol</Text>
            <Text style = {styles.recetas}>-Pizza de Pan Pita</Text>
            <Text style = {styles.recetas}>-Fresco de Suchiles</Text>
            <Text style = {styles.recetas}>-Sincronizadas</Text>
            <Text style = {styles.recetas}>-Leche con Cereal</Text>
            <Text style = {styles.recetas}>-Arroz Frito Chino</Text>
            <Text style = {styles.recetas}>-Plataninas</Text>
            <Text style = {styles.recetas}>-Banderillas</Text>
            <Text style = {styles.recetas}>-Barra de Proteina de Avena</Text>
            <Text style = {styles.recetas}>-Galletas con Chispas de Chocolate</Text>
            <Text style = {styles.recetas}>-Galletas de Avena</Text>
          </ScrollView>
          
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
  padContainer: {
    flex:1,
    paddingHorizontal: 10,
    paddingTop: 180,
    paddingBottom: 20
  },
  back:{
    width: '100%',
    height: '100%',
    flex: 1, 
    justifyContent: "center",
  },
  scrollCont: {
    flex:1,
    backgroundColor: '#EEE9E9',
    borderWidth: 1,
    borderRadius:10,
    padding: 30,
    marginTop:10,
    flexDirection:'column'
  },
  userbox: {
    flex:1,
    backgroundColor: '#EEE9E9',
    justifyContent:'center',
    flexDirection:'row',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    padding: 30,
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
    marginRight:5
  },userbox1: {
    flex:4,
    backgroundColor: '#EEE9E9',
    flexDirection:'column',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    padding:30,
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
    marginRight:5
  },
  text:{
    fontSize: 30,
    color: 'black'
  },
  profilepic: {
    height:100,
    width:75,
  },
  usernombre:{
    marginLeft:10,
    flexDirection:'column',
    width:'65%'
  },
  usernamettitle:{
    fontSize:15,
    fontWeight:'bold'
    
  },
  descripcion:{
    fontSize:12
  },
  misrecetas:{
    alignSelf:'center',
    fontSize: 20,
    color: 'black',
    fontWeight:'bold'
  },
  recetas:{
    fontSize: 25,
    color: 'black'
  }
});

export default ProfileScreen;