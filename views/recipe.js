import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Pressable,
TextInput, KeyboardAvoidingView, Picker } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Dropdown from '../components/dropdown/dropdown';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NavBar from '../components/NavBar';
import { render } from 'react-dom';
import {RNS3} from 'react-native-aws3'

export default function RecipeScreen(props) {

  const [image, setImage] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [pasos, setPasos] = useState('');
  const [categorias, setCategorias] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [sms,setSms] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const Publish = () => {

    if(image==null || titulo=='' ||descripcion==''||pasos==''||categorias==''||dificultad==''){
      setSms("Campos incompletos")
    }
    else
    {
      setSms("")
      //fetch
    }

  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@Usuario')
      console.log(value)
      if(value !== null) {
        return value
      }
    } catch(e) {
      // error reading value
    }
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
      setImage(result)
      
    }
  };

  // Funcion para armar la ruta de la imagen.
  const getImageURL = async () => {
    let fet = "http://localhost:5000/contador/"
    const response = await fetch(fet, {
      method: 'GET'
    })
    const responseJSON = await response.json()
    const user = await getData()
    return user + responseJSON[0].max

    // Debe retornar un String que indique este nombre.
    // La forma del string debe ser 'nombre de usuario loggeado + (llamada a endpoint de contador)'
  }

  const uploadFile = async () => {
    const imageURL = await getImageURL()
    console.log(imageURL)
    if (Object.keys(image).length == 0) {
      alert('Please select image first');
      return;
    }
    console.log(image.uri)
    RNS3.put(
      {
        // `uri` can also be a file system path (i.e. file://)
        uri: image.uri,
        name: imageURL,
        type: image.type,
      },
      {
        keyPrefix: 'recipe/', // Ex. myuploads/
        bucket: 'dinnersready', // Ex. aboutreact
        region: 'us-east-2', // Ex. ap-south-1
        accessKey: 'AKIA3GQSDDDGWDXZDVZ7',
        // Ex. AKIH73GS7S7C53M46OQ
        secretKey: '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',
        // Ex. Pt/2hdyro977ejd/h2u8n939nh89nfdnf8hd8f8fd
        successActionStatus: 201,
      },
    )
    .progress((progress) =>
      console.log(progress.loaded / progress.total)
     )
      .then((response) => {
        console.log(response)
        if (response.status !== 201)
          alert('Failed to upload image to S3');
        /**
         * {
         *   postResponse: {
         *     bucket: "your-bucket",
         *     etag : "9f620878e06d28774406017480a59fd4",
         *     key: "uploads/image.png",
         *     location: "https://bucket.s3.amazonaws.com/**.png"
         *   }
         * }
         */
      });
  };

  const img = require('../assets/images/add-image.png');

  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground source={require('../assets/images/fondo.png')}
            resizeMode="cover"
            style={styles.back}
            imageStyle={{opacity: 0.2}}>
        <View style={styles.top}></View>
        <View style={styles.padContainer}>
          <ScrollView style={styles.scrollCont} contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.text}>Ingresa tu nueva receta</Text>
            <View style={styles.imagePicker}>
              <Pressable style={styles.button} onPress={pickImage}>
              {
                  image ? <Image resizeMode='cover' style={{width: '100%', height: '100%', borderRadius: 30}} 
                  source = {{uri: image.uri}}/> :
                  <Image resizeMode='contain' style={styles.addImage} 
                  source = {img}/>
              }
              </Pressable>
            </View>
            <Text style={styles.titles}>Titulo de receta</Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => setTitulo(e)}
              value={titulo}
              placeholder="Ingresa el título..."
              keyboardType="default"
              fontFamily='Mukta_Regular'
            />
            <Text style={styles.titles}>Descripción</Text>
            <TextInput
              style={styles.inputDesc}
              onChangeText={(e) => setDescripcion(e)}
              value={descripcion}
              multiline={true}
              placeholder="Ingresa la descripción de la receta..."
              keyboardType="default"
              
            />
            <Text style={styles.titles}>Tus ingredientes</Text>
            <View style={styles.AddItem}>
              <Pressable>
                <Text>+ Añade ingredientes</Text> 
              </Pressable>
            </View>
            <Text style={styles.titles}>Pasos a seguir</Text>
            <TextInput
              style={styles.inputDesc}
              onChangeText={(e) => setPasos(e)}
              value={pasos}
              multiline={true}
              placeholder="Ingresa los pasos de la receta..."
              keyboardType="default"
              
            />
            <Text style={styles.titles}>Dificultad de la receta</Text>
            <Dropdown setDificultad = {setDificultad}/>
            <Text style={styles.titles}>Categorías</Text>
            <TextInput
              style={styles.cat}
              onChangeText={(e) => setCategorias(e)}
              value={categorias}
              multiline={true}
              placeholder="Ingresa las categorías de tu receta..."
              keyboardType="default"
              
            />
            
            <View style={styles.publish}>
              <Pressable onPress={() => uploadFile()}>
                <Text style={{fontSize: 18, color: '#fff', fontFamily:'Mukta_Regular',}}>Publicar receta</Text> 
              </Pressable>
            </View>
            {sms!="" && <Text style={styles.Sms}>{sms}</Text>}
            <View style={{ height: 70 }} />
          </ScrollView>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },

  Sms:{
    flex:1,
    color: "orange",
    fontSize:20,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    marginTop: '10px',
    fontWeight:"bold"
  },

  padContainer: {
    flex:1,
    paddingHorizontal: 10,
    paddingTop: 20,
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
    backgroundColor: '#4E87B5',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    padding: 30,
  },
  scrollContainer:{

  },
  text: {
    fontSize: 30,
    color: '#05182A',
    fontFamily: 'Montserrat_Black',
  },
  addRecipe: {
    marginTop: 10,
    fontSize: 15,
    color: 'black',
    alignSelf: 'center'
  },
  imagePicker: {
    width: '95%',
    height: 165,
    alignSelf: 'center',
    backgroundColor: '#EEE9E9',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  addImage: {
    width: '25%',
    height: '25%',
    borderRadius: 30
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titles: {paddingTop: 20,
    fontSize: 25,
    color: '#05182A',
    fontFamily: 'Montserrat_Black',
  },
  input:{
    borderWidth: 1,
    marginTop: 5,
    borderColor: 'black',
    borderRadius: 30,
    fontSize: 18,
    height: 40,
    paddingHorizontal: 15,
    backgroundColor: '#EEE9E9',
    fontFamily:'Mukta_Regular'
  },
  inputDesc:{
    borderWidth: 1,
    marginTop: 5,
    borderColor: 'black',
    borderRadius: 30,
    fontSize: 18,
    height: 170,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#EEE9E9',
    fontFamily:'Mukta_Regular'
  },
  AddItem:{
    borderWidth: 1,
    marginTop: 5,
    borderColor: 'black',
    borderRadius: 30,
    fontSize: 18,
    height: 30,
    width: 160,
    paddingHorizontal:7,
    paddingVertical: 5,
    backgroundColor: '#CECECE'
  },
  difficulty:{
    borderWidth: 1,
    marginTop: 5,
    borderColor: 'black',
    borderRadius: 30,
    fontSize: 18,
    height: 40,
    width: '100%',
    paddingHorizontal:15,
    paddingVertical: 5,
    backgroundColor: '#EEE9E9',
    justifyContent:'center'
  },
  cat:{
    borderWidth: 1,
    marginTop: 5,
    borderColor: 'black',
    borderRadius: 30,
    fontSize: 18,
    height: 130,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#EEE9E9',
    zIndex:1,
    fontFamily:'Mukta_Regular'
  },
  publish:{
    height: 60,
    width: '80%',
    backgroundColor: '#5EA3DB',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 30,
    marginTop: 50,
    alignSelf: 'center',
  },
  top:{
    height: 90,
    width: '100%',
    backgroundColor: '#3D6A8F',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});

//export default RecipeScreen;