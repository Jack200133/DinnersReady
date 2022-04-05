import React from 'react';
import { StyleSheet, Text, View, ImageBackground,ScrollView,TextInput, Pressable } from 'react-native';

import TitleBar from '../components/TitleBar';


function LogIn(props) {

  

  const [usuario, setUsuario] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");


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
            onChangeText={setUsuario}
            value={usuario}
            placeholder="Ingrese su usuario"
            keyboardType="default"
            />
          <Text style={styles.desctext}>Contraseña:</Text>

          <TextInput
          style={styles.inputLogIn}
          onChangeText={setContraseña}
          value={contraseña}
          placeholder="Ingrese su contraseña"
          keyboardType="default"
          />

          <View style={styles.LogInButton}>
            <Pressable>
                <Text style={{fontSize: 18, color: '#EEE9E9'}}>Ingresar</Text> 
            </Pressable>
          </View>
          <View style={styles.LogInButton}>
            <Pressable>
                <Text style={{fontSize: 18, color: '#EEE9E9'}}>Registrarse</Text> 
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
  },  
  titleL:{
    justifyContent:'center',
    alignItems:'center',
    height:'25%',
    width:'100%',

  },
  titleDinner:{
    fontSize: 30, 
    fontWeight: 'bold', 
    alignSelf: 'center', 
    justifyContent: 'center'
  }
});

export default LogIn;