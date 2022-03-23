import React from "react"
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Pressable, SafeAreaView,TextInput } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import styles from './style.js';


const ModaleditProfile = ({descripcion, imagen, toggleModal}) =>{

  const [image, setImage] = React.useState(null);
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [desc, onChangeDesc] = React.useState(null);


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


  return(
    <SafeAreaView style = {{flex:1}}>
      <View style = {styles.container}>
        <View style = {styles.buttons}>
          <View>
            <Pressable onPress={toggleModal}>
              <Text style = {{fontSize: 18, color:'#EEE9E9'}}>Cancelar</Text>
            </Pressable>
          </View>
          <View>
            <Pressable onPress={toggleModal}>
              <Text style = {{fontSize: 18, color:'#EEE9E9'}}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
        <View style = {styles.PickerContainer}>
          <View style={styles.imagePicker}>
            <Text style={styles.titular}>Presione imagen para cambiar</Text>
            <Pressable style={styles.button} onPress={pickImage}>
            {
                image ? <Image resizeMode='cover' style={{width: '100%', height: '100%', borderRadius: 100}} 
                source = {{uri: image}}/> :
                <Image resizeMode='contain' style={styles.addImage} 
                source = {imagen}/>
            }
            </Pressable>
          </View>
          <View style = {{marginVertical: 15, flex:1}}>
            <Text style = {{marginTop: 45, marginLeft: 20, fontSize: 18}} >Ingrese nueva descripcion</Text>
            <TextInput
                style={styles.inputDesc}
                onChangeText={onChangeNumber}
                value={number}
                placeholder = {descripcion}
                placeholderTextColor = {'black'}
                multiline = {true}
                keyboardType="default"
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default ModaleditProfile;