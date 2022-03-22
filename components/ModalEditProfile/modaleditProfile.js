import React from "react"
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Pressable } from 'react-native';

import styles from './style.js';


const ModaleditProfile = ({descripcion, imagen, toggleModal}) =>{


  return(
    <View style = {styles.container}>
      <View style = {styles.buttons}>
        <Pressable onPress={toggleModal}>
          <Text>Cancelar</Text>
        </Pressable>
        <Pressable >
          <Text>Aceptar</Text>
        </Pressable>
      </View>
      <View>

      </View>
    </View>
  )
}
export default ModaleditProfile;