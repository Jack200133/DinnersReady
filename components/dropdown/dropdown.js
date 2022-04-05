import React from "react"
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Pressable, SafeAreaView,TextInput } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import styles from './styles.js';


const Opcion = ({ texto, select }) => {
    return (
        <Pressable onPress={select}>
            <View style={styles.opcion}>
                <Text style={styles.opcionTexto}>{texto}</Text>
            </View>
        </Pressable>
    )
}

const Dropdown = () =>{
    const elements = ['Fácil', 'Intermedio', 'Difícil']

    const[eleccion, setEleccion] = React.useState('Elegir dificultad')
    const[clicked, setClicked] = React.useState(false)

    const onClick = () => {
        setClicked(!clicked)
    }

    const select = (text) => {
        setEleccion(text);
        onClick()
    }

    return(
    <View>
        <Pressable onPress={onClick}>
            <View  style={styles.container}>
                <Text style={{fontSize:18}}>{eleccion}</Text>
            </View>
        </Pressable>
        
        {
            clicked && 
            <View style={styles.containerOpciones}>
                {
                    elements.map((element) => <Opcion key={element} texto={element} select={() => select(element)}/>)
                }
            </View>
        }
    </View>
  )
}
export default Dropdown;