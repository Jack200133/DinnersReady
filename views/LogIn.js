import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground,ScrollView,TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



import TitleBar from '../components/TitleBar';
//import {useNavigate} from 'react-router-dom';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@Usuario', value)
  } catch (e) {
    // saving error
  }
}

function LogIn(props) {

  
  const [dentro, setDentro] = React.useState(true)
  const [correo, setCorreo] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");
  //const navigate = useNavigate()

  const checkLog = async() => {
      console.log(contraseña)
      const fet = 'http://3.132.195.25/dinner/login/'+contraseña+'/'+correo
      const response = await fetch(fet)
        .then((response) => {return response.json()}
        ).then((responseInJSON) => {return responseInJSON})

      const loged = response.completado

      if(loged){
        storeData(correo)
        props.navigation.navigate('Navigation')
        //navigate('/Navigation')
      } else {
        setDentro(false)
      }
  }

  return (
    <View style={styles.containerLogIn}>
      <TitleBar></TitleBar>
      <ImageBackground source={require('../assets/images/fondo.png')}
              resizeMode="cover"
              style={styles.backimage}
              imageStyle={{opacity: 0.2}}>

        <View style={styles.titleL}>
                <Text style={styles.titleDinner}>Dinner's Ready</Text>
        </View>

        <View style={styles.LogInContainer}>
          <Text style={styles.desctext}>Usuario:</Text>
            <TextInput
            style={styles.inputLogIn}
            onChangeText={(e) => setCorreo(e)}
            value={correo}
            placeholder="Ingrese su correo"
            keyboardType="default"
            />
          <Text style={styles.desctext}>Contraseña:</Text>

          <TextInput
          style={styles.inputLogIn}
          onChangeText={(e) => setContraseña(e)}
          value={contraseña}
          secureTextEntry={true}
          placeholder="Ingrese su contraseña"
          keyboardType="default"
          />

          {!dentro && <Text style={{marginLeft: 10, color:'red', fontSize: 16}}>Error al ingresar. Introduce bien tus datos.</Text>}
          

          <View style={styles.LogInButton}>
            <Pressable onPress ={() => checkLog()}>
                <Text style={{fontSize: 18, color: '#EEE9E9', fontFamily:'Mukta_Regular'}}>Ingresar</Text> 
            </Pressable>
          </View>
          <View style={styles.LogInButton}>
            <Pressable onPress = {() => {props.navigation.navigate('Register')}}>
                <Text style={{fontSize: 18, color: '#EEE9E9', fontFamily:'Mukta_Regular'}}>Registrarse</Text> 
            </Pressable>
          </View>
        </View>
             
        </ImageBackground>
        <TitleBar></TitleBar>
    </View>
    
  );
}
const styles = StyleSheet.create({  
  containerLogIn: {
    flex:1
  },
  inputLogIn:{
    borderWidth: 1,
    marginBottom: 20,
    borderColor: 'black',
    borderRadius: 30,
    fontSize: 18,
    height: 40,
    paddingHorizontal: 25,
    backgroundColor: '#EEE9E9',
    fontFamily:'Mulish_Regular',
  },
  backimage:{
    width: '100%',
    height: '100%',
    flex: 1, 
    justifyContent: "center",
  },
  LogInContainer: {
    flex:1,
    height: '80%',
    paddingHorizontal: 10,
    width:'100%',
   
  },
  LogInButton:{
    height: 60,
    width: '75%',
    backgroundColor: '#4E87B5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 30,
    marginTop: 30,
    alignSelf: 'center',
  },
  desctext:{
    fontSize: 18,
    marginLeft:10,
    marginBottom:5,
    fontFamily:'Mukta_Regular',
  },  
  titleL:{
    justifyContent:'center',
    alignItems:'center',
    height:'25%',
    width:'100%',

  },
  titleDinner:{
    fontSize: 34, 
    alignSelf: 'center', 
    justifyContent: 'center',
    fontFamily: 'Montserrat_Black',
  }
});

export default LogIn;