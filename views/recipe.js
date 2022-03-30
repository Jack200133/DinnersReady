import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Pressable,
TextInput, KeyboardAvoidingView, Picker } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import NavBar from '../components/NavBar';
import { render } from 'react-dom';

export default function RecipeScreen(props) {

  const [image, setImage] = useState(null);
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");
  const [desc, onChangeDesc] = React.useState(null);
  const [country, setCountry] = useState('Unknown');
  const [value, setValue] = React.useState('Seleccionar dificultad');


  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
                  source = {{uri: image}}/> :
                  <Image resizeMode='contain' style={styles.addImage} 
                  source = {img}/>
              }
              </Pressable>
            </View>
            <Text style={styles.titles}>Titulo de receta</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Ingresa el título..."
              keyboardType="default"
            />
            <Text style={styles.titles}>Descripción</Text>
            <TextInput
              style={styles.inputDesc}
              onChangeText={onChangeDesc}
              value={number}
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
              onChangeText={onChangeDesc}
              value={number}
              multiline={true}
              placeholder="Ingresa los pasos de la receta..."
              keyboardType="default"
            />
            <Text style={styles.titles}>Dificultad de la receta</Text>
            <View >
                <select  value={value} onChange={handleChange} style={{
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
                  justifyItems:'center',
                  paddingLeft:15,
                }}>
                  <option hidden="hidden" >Elegir dificultad</option>
                  <option value = "Facil">Facil</option> 
                  <option value = "Intermedio">Intermedio</option> 
                  <option value = "Dificil">Dificil</option> 
                </select>
            </View>
            <Text style={styles.titles}>Categorías</Text>
            <TextInput
              style={styles.cat}
              onChangeText={onChangeDesc}
              value={number}
              multiline={true}
              placeholder="Ingresa las categorías de tu receta..."
              keyboardType="default"
            />
            <View style={styles.publish}>
              <Pressable>
                <Text style={{fontSize: 18, color: '#EEE9E9'}}>Publicar receta</Text> 
              </Pressable>
            </View>
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
    backgroundColor: '#6F6861',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    padding: 30,
  },
  scrollContainer:{

  },
  text: {
    fontSize: 30,
    color: 'white',
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
    color: 'white',
  },
  input:{
    borderWidth: 1,
    marginTop: 5,
    borderColor: 'black',
    borderRadius: 30,
    fontSize: 18,
    height: 40,
    paddingHorizontal: 15,
    backgroundColor: '#EEE9E9'
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
    backgroundColor: '#EEE9E9'
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
    backgroundColor: '#EEE9E9'
  },
  publish:{
    height: 60,
    width: '80%',
    backgroundColor: '#f36c6c',
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
    backgroundColor: '#f36c6c',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});

//export default RecipeScreen;