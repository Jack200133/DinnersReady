import React , { useState, useEffect, Fragment } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Pressable,
TextInput, KeyboardAvoidingView, Picker } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigate } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';


import NavBar from '../components/NavBar';
import { render } from 'react-dom';
import PubItem from '../components/PubItem';
import Ingred from '../components/Ingred';

const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@Receta')
      if(value !== null) {
        return value
      }
    } catch(e) {
    }
  }

export default function RecipeView(props) {

    //const navigate = useNavigate()

    const star = require('../assets/images/star.png')
    const image = require('../assets/images/hamburguesa_temporal.jpg')
    const saved = require('../assets/images/bookmark.png')
    const arrow = require('../assets/images/left-arrow.png')
    const ingredientes = ['zanahoria', 'pollo', 'pan', 'arroz', 'tomate', 'lechuga']
    const [info, setInfo] = React.useState({})

    useEffect( async () => {
        const receta = await getData()
        const url = `http://localhost:5000/recetas/${receta}`
        const response = await fetch(url, {
            method: 'GET',
        })
        const responseJSON = await response.json()
        setInfo(responseJSON[0])
    }, [])

    return (
        <Fragment>
            <View style={styles.top}>
                <Pressable style={styles.button} onPress={()=>{props.navigation.navigate('Navigation')}}>
                            <Image style={styles.arrow} source={arrow}></Image>
                </Pressable>
            </View>
            <ScrollView contentContainerStyle = {styles.container}>
                
                <View style={styles.vistas}>
                    
                        <View style = {{...styles.TextBack,backgroundColor: '#4ECF66'}}>
                            <Text style={styles.Dificult} >{info.dificultad}</Text>
                        </View>
                        <View style = {styles.SavedContainer}>
                            <Image source={saved} 
                            resizeMode="contain" style={styles.Image}>  
                                
                            </Image>
                        </View>
                </View>
                <Image source={image} resizeMode="contain" style={styles.background}>
                    </Image>   
                <Text style={styles.name}>Por: {info.autor}</Text>
                <View style = {styles.TitleContainer}>
                    <Text style={styles.Title}>{info.nombre}</Text>
                    
                    <View style = {styles.Stars}>
                        
                        <View style = {styles.SavedContainer}>
                            <Image source={star} 
                            resizeMode="contain" style={styles.Estrella}>  
                                
                            </Image>
                        </View>
                        <Text style={styles.TextStar}> {info.estrellas}</Text>
                    </View>
                </View>
                <Text style={styles.Arr}>{"Descripcion"}</Text>
                <Text style={styles.Descripcion}>{info.descripcion}</Text>
                <View>
                    <Text style={styles.Arr}>{"Ingredientes"}</Text>
                    <View style={styles.ingredContainer}> 
                        {ingredientes.map((ingredient, index) => <Ingred key = {ingredient} text = {ingredient} index = {index}/>)}
                    </View>
                </View>
                <Text style={styles.Arr}>{"Pasos"}</Text>
                <Text style={styles.Descripcion}>{"Cocinar la borgir."}</Text>
                <Text style={styles.Arr}>{"Categorías"}</Text>
                <Text style={styles.Descripcion}>{"#love4war"}</Text>                
            </ScrollView>
        </Fragment>
        
    );
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: "column",
        width: "100%",
        height: '100%',
        backgroundColor: '#D0F0F8',
        paddingBottom: 35
    },
    ingredContainer: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        paddingHorizontal: 15
    },
    vistas:{
        width: "100%",
        height: 30,
        display: 'flex',
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 10,
        paddingRight:20,
        marginBottom: 10,
        justifyContent: 'space-between',
        alignContent: "center",
        paddingHorizontal: 10,
    },
    SavedContainer : {
        marginRight: 7,
        height: 30,
        width: 30
    },  
    background:{
        width: "90%",
        height: 200,
        display: 'flex',
        flexDirection: "row",
        alignSelf: 'center', 
        borderRadius:10,
    },
    Image:{
        width: 30,
        height: 30,
        justifyContent: "center",
        alignSelf:'center',
    },
    Dificult:{
        fontSize:15,
        textAlign: "center",
        textAlignVertical: 'center',
        padding: 5,
        height: 20,
        
    },
    TitleContainer:{
        display:"flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        paddingRight:20,
    },
    Stars:{
        backgroundColor:"black",
        width: '30%',
        height:30,
        display:'flex',
        flexDirection: "row",
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius:10,
    },
    TextStar:{
        color:'white'
    },
    Estrella:{
        width: 25,
        height: 20,
        justifyContent: "center",
        alignSelf:'center',
    },
    TextBack:{
        width:"30%",
        height:30,
        borderRadius:10,
        borderWidth:1,
        alignSelf:'center',
        display:"flex",
        alignContent: 'center',
        justifyContent: 'center',
    },
    Hashtag:{
        justifyContent:"center",
        marginLeft:40,
        fontStyle:'italic'  
    },
    Title:{
        //flex: 2, 
        justifyContent:"center",
        //marginLeft:40,
        fontWeight:'bold',
        fontSize: 20
    },
    Descripcion:{
        //flex: 2, 
        justifyContent:"center",
        marginLeft:20,
        
    },
    name:{
        //flex: 2, 
        justifyContent:"center",
        marginTop: 5,
        marginLeft:20,
        marginBottom: 10,
        
    },
    Arr:{
        //flex: 2, 
        justifyContent:"center",
        marginTop: 15,
        marginLeft:20,
        marginBottom: 5,
        fontWeight: "bold"
    },
    top: {
        height: 90,
        width: '100%',
        backgroundColor: '#3D6A8F',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    arrow:{
        alignSelf:'flex-start',
        width: '25%',
        height: '40%', 
        resizeMode: 'contain',
    },
    button:{
        width: 70,
        height: 70,
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginLeft: 20
    },
});