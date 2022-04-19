<<<<<<< HEAD
import React from 'react';
=======
import React, {useState} from 'react';
>>>>>>> Entry
import { StyleSheet, Text, View, ImageBackground, SafeAreaView,ScrollView,TextInput, Pressable, Picker, Image } from 'react-native';

import TitleBar from '../components/TitleBar';
import * as ImagePicker from 'expo-image-picker';


function SignIn(props) {

    const [usuario, setUsuario] = React.useState("");
    const [contraseña, setContraseña] = React.useState("");
    const [correo, setCorreo] = React.useState("");
    const [descripcion, setDescripcion] = React.useState("");
    const [image, setImage] = React.useState(null);

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

<<<<<<< HEAD
            <ScrollView>
                <View style={styles.title}>
                    <Text style = {{ fontSize: '30px', fontWeight: 'bold', alignSelf: 'center', justifyContent: 'center'}}>Crea tu cuenta</Text>
=======
            <ScrollView style={styles.scrollContSigin}>
                <View style={styles.title}>
                    <Text style = {styles.titleSign}>Crea tu cuenta</Text>
>>>>>>> Entry
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
                        style={styles.inputLogIn}
                        onChangeText={setContraseña}
                        value={contraseña}
                        placeholder="Ingrese su contraseña"
                        keyboardType="default"
                    />
                    <Text style={styles.desctext}>Repetir contraseña:</Text>
                    <TextInput
                        style={styles.inputLogIn}
                        onChangeText={setContraseña}
                        value={contraseña}
                        placeholder="Confirme su contraseña"
                        keyboardType="default"
                    />
                    <Text style={styles.desctext}>Descripcion:</Text>
                    <TextInput
                        style={styles.inputLogIn}
                        onChangeText={setDescripcion}
                        value={descripcion}
<<<<<<< HEAD
                        placeholder="Ingresa una breve descripcion tuya"
                        keyboardType="default"
                    />
=======
                        placeholder="Ingresa una breve descripcion"
                        keyboardType="default"
                    />
                      
>>>>>>> Entry
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
<<<<<<< HEAD
=======
                       
                   
>>>>>>> Entry
                    <View style={styles.LogInButton}>
                        <Pressable>
                            <Text style={{fontSize: 18, color: '#EEE9E9'}}>Registrarse</Text> 
                        </Pressable>
                    </View>
<<<<<<< HEAD
                </View>
            </ScrollView>
        </ImageBackground>
        <TitleBar></TitleBar>
=======

        
                </View>
            </ScrollView>
      </ImageBackground>
      <TitleBar></TitleBar>
>>>>>>> Entry
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
<<<<<<< HEAD
    height: '80%',
=======
    height: 850,
>>>>>>> Entry
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
<<<<<<< HEAD
    fontSize: 28,
=======
    fontSize: 18,
>>>>>>> Entry
    marginLeft:10,
    marginBottom:5,
  },  
  title:{
    justifyContent:'center',
    alignItems:'center',
<<<<<<< HEAD
    height:'25%',
=======
    height:'15%',
>>>>>>> Entry

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
<<<<<<< HEAD
=======
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
>>>>>>> Entry
});

export default SignIn;