import React from 'react';
import {View,ImageBackground,Image,Text, Pressable} from 'react-native';
import { useNavigate } from 'react-router-dom';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const star = require('../../assets/images/star.png')
const sarte = require('../../assets/images/sarten.png')
const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@Usuario')
      if(value !== null) {
        return value
      }
    } catch(e) {
      // error reading value
    }
  }
const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@Receta', value.toString())
    } catch (e) {
        // saving error
    }
}

const save = (value, nav) => {
    storeData(value)
    nav.navigate('RecipeView')
}

const send = async(id) =>{
    const correo = await getData()
    const json = {
        id:id,
        correo:correo,
    }

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    }
    const resp = await fetch('http://3.132.195.25/dinner/save/', options)
    .then((response) => {return response.json()})
    .then((responseInJSON) => { return responseInJSON })
}

const Gradient = (dificultad) => {
    switch (dificultad) {
        case 'Fácil':
            return (
                <View style={styles.TextBack}>
                    <Image testID='sarten' style={styles.Dificult} source={sarte} resizeMode="contain" />
                </View>
            )
        case 'Medio':
            return (
                <View style={styles.TextBack}>
                    <Image testID='sarten' style={styles.Dificult} source={sarte} resizeMode="contain" />
                    <Image testID='sarten' style={styles.Dificult} source={sarte} resizeMode="contain" />
                </View>
            )
        case 'Difícil':
            return (
                <View style={styles.TextBack}>
                    <Image testID='sarten' style={styles.Dificult} source={sarte} resizeMode="contain" />
                    <Image testID='sarten' style={styles.Dificult} source={sarte} resizeMode="contain" />
                    <Image testID='sarten' style={styles.Dificult} source={sarte} resizeMode="contain" />
                </View>
            )
        
        default:
                <View style={styles.TextBack}>
                </View>
    

    }
}



const PubItem = ({id,image,color,dificultad,saved,cH,NameRecipe,stars,hash,desc,autor,navigation}) => {
    //console.log(props.navigation.navigate)
    //const navigate = useNavigate()
    return (
        <Pressable style = {styles.container} onPress={()=> {save(id, navigation)}}>
            <View>
                <View style={styles.vistas}>
                        {
                            Gradient(dificultad)
                        }
                        <Pressable testID='pub'  onPress={()=> {console.log('IDPUB',id);cH(id);send(id)}}>
                            <View style = {styles.SavedContainer}>
                                <Image source={saved} 
                                resizeMode="contain" style={styles.Image} >  
                                    
                                </Image>
                            </View>
                        </Pressable>
                </View>
                <Image source={{uri: image}} resizeMode="contain" style={styles.backgroundX}>
                    </Image>
                <Text style={styles.autor}>{"Autor: "+autor}</Text>
                <View style = {styles.TitleContainer}>
                    <Text style={styles.Title}>{NameRecipe}</Text>
                    <View style = {styles.Stars}>
                        
                        <View style = {styles.SavedContainer}>
                            <Image source={star} 
                            resizeMode="contain" style={styles.Estrella}>  
                                
                            </Image>
                        </View>
                        <Text style={styles.TextStar}> {stars}</Text>
                    </View>
                </View>
                <Text style={styles.Descripcion}>{desc}</Text>
                <Text style = {styles.Hashtag}>{hash} </Text>
            </View>
        </Pressable>
        
    );
};


export default PubItem;