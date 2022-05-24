import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {View,ImageBackground,Image,Text, Pressable} from 'react-native';
import { useNavigate } from 'react-router-dom';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const star = require('../../assets/images/star.png')
const sarte = require('../../assets/images/sarten.png')


const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@Receta', value)
    } catch (e) {
        // saving error
    }
}

const Gradient = (dificultad) => {
    console.log(dificultad)
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

const PubItem = (props) => {
    console.log(props.navigation.navigate)
    //const navigate = useNavigate()
    return (
        <Pressable style = {styles.container} onPress={()=> {storeData(props.id); props.navigation.navigate('RecipeView')}}>
            <View >
                <View style={styles.vistas}>
                        {
                            Gradient(props.dificultad)
                        }
                        
                        <View style = {styles.SavedContainer}>
                            <Image source={props.saved} 
                            resizeMode="contain" style={styles.Image}>  
                                
                            </Image>
                        </View>
                        
                </View>
                <Image source={props.image} resizeMode="contain" style={styles.backgroundX}>
                    </Image>
                <Text style={styles.autor}>{"Autor: "+props.autor}</Text>
                <View style = {styles.TitleContainer}>
                    <Text style={styles.Title}>{props.NameRecipe}</Text>
                    <View style = {styles.Stars}>
                        
                        <View style = {styles.SavedContainer}>
                            <Image source={star} 
                            resizeMode="contain" style={styles.Estrella}>  
                                
                            </Image>
                        </View>
                        <Text style={styles.TextStar}> {props.stars}</Text>
                    </View>
                </View>
                <Text style={styles.Descripcion}>{props.desc}</Text>
                <Text style = {styles.Hashtag}>{props.hash} </Text>
            </View>
        </Pressable>
        
    );
};


export default PubItem;