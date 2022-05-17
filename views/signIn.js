import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView,ScrollView,TextInput, Pressable, Picker, Image } from 'react-native';

import TitleBar from '../components/TitleBar';
import * as ImagePicker from 'expo-image-picker';
//import {useNavigate} from 'react-router-dom';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@Usuario', value)
  } catch (e) {
    // saving error
  }
}

function SignIn(props) {

    const [usuario, setUsuario] = React.useState("");
    const [contraseña, setContraseña] = React.useState("");
    const [contraseña2, setContraseña2] = React.useState("");
    const [correo, setCorreo] = React.useState("");
    const [descripcion, setDescripcion] = React.useState("");
    const [image, setImage] = React.useState(null);
    //const navigate = useNavigate()

    const regis = async () => {
          const json = {
              name:usuario,
              correo:correo,
              contrasena:contraseña,
              descripcion:descripcion
          }
  
          const options = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(json)
          }
          const resp = await fetch('http://localhost:5000/users', options)
          .then((response) => {return response.json()})
          .then((responseInJSON) => { return responseInJSON })
          console.log(resp.completado)
          if(!resp.completado){
            console.log('Ya existe ese usuario')
          }
          else{
            storeData(correo)
            props.navigation.navigate('Navigation')
          }

          setUsuario('')
          setContraseña('')
          setContraseña2('')
          setCorreo('')
          setDescripcion('')

      }

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
        
      }
    };

    const img = require('../assets/images/add-image.png');

  return (
    <View style={styles.containerLogIn}>
      <TitleBar></TitleBar>
      <ImageBackground source={require('../assets/images/fondo.png')}
              resizeMode="cover"
              style={styles.backimage}
              imageStyle={{opacity: 0.2}}>

            <ScrollView style={styles.scrollContSigin}>
                <View style={styles.title}>
                    <Text style = {styles.titleSign}>Crea tu cuenta</Text>
                </View>
                <View style={styles.LogInContainer}>

                    <Text style={styles.desctext}>Correo:</Text>
                    <TextInput
                        style={styles.inputLogIn}
                        onChangeText={setCorreo}
                        value={correo}
                        placeholder="Ingrese su correo"
                        keyboardType="default"
                    />
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
                        style={styles.inputContra}
                        onChangeText={setContraseña}
                        value={contraseña}
                        secureTextEntry={true}
                        placeholder="Ingrese su contraseña"
                        keyboardType="default"
                    />
                    <Text style={styles.desctext}>Repetir contraseña:</Text>
                    <TextInput
                        style={styles.inputContra}
                        secureTextEntry={true}
                        onChangeText={setContraseña2}
                        value={contraseña2}
                        placeholder="Confirme su contraseña"
                        keyboardType="default"
                    />
                    <Text style={styles.desctext}>Descripcion:</Text>
                    <TextInput
                        style={styles.inputLogIn}
                        onChangeText={setDescripcion}
                        value={descripcion}
                        placeholder="Ingresa una breve descripcion"
                        keyboardType="default"
                    />
                      
                    <View style={styles.imagePickerLogIn}>
                      <Pressable style={styles.buttonS} onPress={pickImage}>
                      {
                          image ? <Image resizeMode='cover' style={{width: '100%', height: '100%', borderRadius: 30}} 
                          source = {{uri: image}}/> :
                          <Image resizeMode='contain' style={styles.addImageLI} 
                          source = {img}/>
                      }
                      </Pressable>
                    </View>
                       
                   
                    <View style={styles.LogInButton}>
                        <Pressable onPress={() => regis()}>
                            <Text style={{fontSize: 18, color: '#EEE9E9'}}>Registrarse</Text> 
                        </Pressable>
                    </View>

        
                </View>
            </ScrollView>
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
  inputContra:{
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
    height: 850,
    paddingHorizontal: 10
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
  title:{
    justifyContent:'center',
    alignItems:'center',
    height:'15%',

  },
  imagePickerLogIn: {
    width: '95%',
    height: 165,
    alignSelf: 'center',
    backgroundColor: '#EEE9E9',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  buttonS: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addImageLI: {
    width: '25%',
    height: '25%',
    borderRadius: 30
  },
  titleSign:{
    fontSize: 30, 
    fontWeight: 'bold', 
    alignSelf: 'center', 
    justifyContent: 'center'
  },

  scrollContSigin: {
    flex:1,
  },
  scrollContainerSigin:{

  },
});

export default SignIn;