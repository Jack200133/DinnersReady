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
const Gradient = (dificultad) => {
    const sarte = require('../assets/images/sarten.png')
    switch (dificultad) {
        case 'Fácil':
            return (
                <View style={styles.TextBack}>
                    <Image style={styles.Dificult} source={sarte} resizeMode="contain" />
                </View>
            )
        case 'Medio':
            return (
                <View style={styles.TextBack}>
                    <Image style={styles.Dificult} source={sarte} resizeMode="contain" />
                    <Image style={styles.Dificult} source={sarte} resizeMode="contain" />
                </View>
            )
        default:
            return (
                <View style={styles.TextBack}>
                    <Image style={styles.Dificult} source={sarte} resizeMode="contain" />
                    <Image style={styles.Dificult} source={sarte} resizeMode="contain" />
                    <Image style={styles.Dificult} source={sarte} resizeMode="contain" />
                </View>
            )
    

    }
}

const getData = async () => {
    const value = await AsyncStorage.getItem('@Receta')   
    return value
  }

export default function RecipeView(props) {

    //const navigate = useNavigate()

    const star = require('../assets/images/star.png')
    const saved = require('../assets/images/bookmark.png')
    const savednt = require('../assets/images/bookmarkN.png')
    const arrow = require('../assets/images/left-arrow.png')
    
    const [info, setInfo] = React.useState({})
    const [ingredients, setIngredients] = React.useState([])

    useEffect( async () => {
        const receta = await getData()
        const url = `http://3.132.195.25/dinner/recetas/${receta}`
        const response = await fetch(url, {
            method: 'GET',
        })
        const responseJSON = await response.json()
        setInfo(responseJSON[0])
        console.log("DATOS: ",responseJSON[0])



        const id_receta = responseJSON[0].id
        const url2 = `http://3.132.195.25/dinner/ingredientes_receta/${id_receta}`
        //const url2 = `http://localhost:5000/ingredientes_receta/${id_receta}`
        const response2 = await fetch(url2, {
            method: 'GET',
        })
        const responseJSON2 = await response2.json()
        setIngredients(responseJSON2)

        console.log("DATOS2: ",responseJSON2)
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
                        <View style={styles.dificultad}>
                        {
                            Gradient(info.dificultad)
                        }
                        </View>
                        <View style = {styles.SavedContainer}>
                            <Image source={saved} 
                            resizeMode="contain" style={styles.Image}>  
                                
                            </Image>
                        </View>
                </View>
                <Image source={info.imagen} resizeMode="contain" style={styles.background}>
                    </Image>   
                <Text style={styles.name}>Por: {info.autor}</Text>
                <View style = {styles.TitleContainer}>
                    <Text style={styles.Title}>{info.nombre}</Text>
                    
                    <View style = {styles.Stars}>
                        
                        <View style = {styles.StarContainer}>
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
                        {ingredients.map((index) => 
                        <Text key = {index} text = {index.nombre_ingrediente} index = {index}>
                            {`${index.nombre_ingrediente } --> ${index.cantidad}`}
                        </Text>)}
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
    dificultad:{
        display:'flex',
        flexDirection: "row",
        width: "200px",
    },
    ingredContainer: {
        display: 'flex',
        flexDirection:'column',
        marginLeft:10,
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        paddingHorizontal: 15
    },
    vistas:{
        width: "90vw",
        height: 30,
        display: 'flex',
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 20,
        marginRight:20,
        marginBottom: 20,
        justifyContent: 'space-between',
        alignContent: "center",
        paddingHorizontal: 0,
    },
    SavedContainer : {
        display: 'flex',
        backgroundColor: '#5EA3DB',
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        width: 45,
        borderRadius: 15,
    },  
    StarContainer:{
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        width: 45,
        borderRadius: 15,
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
        height: 30,
        width: 30,
        
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
        width:200,
        height:40,
        borderRadius:10,
        borderWidth:1,
        backgroundColor: '#5EA3DB',
        alignSelf:'center',
        display:"flex",
        flexDirection: "row",
        alignItems: 'center',
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