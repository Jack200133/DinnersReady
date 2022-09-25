import React , { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Pressable,
TextInput, KeyboardAvoidingView, Picker } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Dropdown from '../components/dropdown/dropdown';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NavBar from '../components/NavBar';
import { render } from 'react-dom';
import {RNS3} from 'react-native-aws3';
import Ingrediente from '../components/ingrediente';

export default function RecipeScreen(props) {

  const [image, setImage] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [pasos, setPasos] = useState('');
  const [categorias, setCategorias] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [sms,setSms] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const imageU = useRef('')

  
  /*const handleChange = (event) => {
    setValue(event.target.value);
  };*/

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@Usuario')
      //console.log(value)
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
    //console.log(result);

    if (!result.cancelled) {
      setImage(result)
      
    }
  };

  // Funcion para armar la ruta de la imagen.
  const getImageURL = async () => {
    let fet = "http://3.132.195.25/dinner/contador/"
    const response = await fetch(fet, {
      method: 'GET'
    })
    const responseJSON = await response.json()
    const user = await getData()
    return user + responseJSON[0].max

    // Debe retornar un String que indique este nombre.
    // La forma del string debe ser 'nombre de usuario loggeado + (llamada a endpoint de contador)'
  }

  const addInput = () => {
    const temp = [...ingredientes]
    temp.push({ing: '', cantidad: ''})
    setIngredientes(temp)
  }

  const uploadFile = async () => {
    const imageURL = await getImageURL()
    if (Object.keys(image).length == 0) {
      alert('Please select image first');
      return;
    }
    //console.log(image.uri)
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
        //console.log(response)
        if (response.status !== 201)
          alert('Failed to upload image to S3');
        imageU.current = 'https://dinnersready.s3.us-east-2.amazonaws.com/recipe/' + imageURL
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

  const uploadRecipe = async() => {
    if(/*image==null ||*/ titulo=='' ||descripcion==''||pasos==''||categorias==''||dificultad==''){
      setSms("Campos incompletos")
    }
    else
    {
      setSms("")
      const usuario = await getData()
      await uploadFile()
      const url = 'http://3.132.195.25/dinner/crear_receta/'
      const json = {
        nombre:titulo,
        descripcion:descripcion,
        dificultad:dificultad,
        estrellas:5,
        autor: usuario,
        link: imageU.current,
        ingredientes: ingredientes
      }

      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(json)
      }
      const resp = await fetch(url, options)
      .then((response) => {return response.json()})
      .then((responseInJSON) => { return responseInJSON })
    }
    
  }

  const img = require('../assets/images/add-image.png');
  //console.log(ingredientes)
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground source={require('../assets/images/fondo.png')}
            resizeMode="cover"
            style={styles.back}
            imageStyle={{opacity: 0.2}}>
        <View style={styles.top}></View>
        <View style={styles.padContainer}>
          <ScrollView style={styles.scrollCont} contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.text} testID='texto'>Ingresa tu nueva receta</Text>
            <View style={styles.imagePicker}>
              <Pressable testID='picker' style={styles.button} onPress={pickImage}>
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
              fontFamily='Arial'
              testID='titulo'
            />
            <Text style={styles.titles}>Descripción</Text>
            <TextInput
              style={styles.inputDesc}
              onChangeText={(e) => setDescripcion(e)}
              value={descripcion}
              multiline={true}
              placeholder="Ingresa la descripción de la receta..."
              keyboardType="default"
              testID='descripcion'
            />
            <Text style={styles.titles}>Tus ingredientes</Text>
            <View style={styles.ing}>
              {
                ingredientes.map((current, index) => <Ingrediente key={index} ingrediente={current.ing} cantidad={current.cantidad} index={index} state={ingredientes} setState={setIngredientes} />)
              }
            </View>
            <View style={styles.AddItem}>
              <Pressable testID='ing' onPress={addInput}>
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
              testID='pasos'
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
              testID='cat'
            />
            
            <View style={styles.publish}>
              <Pressable testID='publish' onPress={() => uploadRecipe()}>
                <Text style={{fontSize: 18, color: '#fff', fontFamily:'Arial',}}>Publicar receta</Text> 
              </Pressable>
            </View>
            {sms!="" && <Text testID='sms' style={styles.Sms}>{sms}</Text>}
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
    fontFamily:'Arial'
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
    fontFamily:'Arial'
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
    fontFamily:'Arial'
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
  },
  ing:{
    justifyContent: 'center'
  }
});

//export default RecipeScreen;