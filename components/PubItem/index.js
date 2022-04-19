import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {View,ImageBackground,Image,Text, Pressable} from 'react-native';
import styles from './style';

const star = require('../../assets/images/star.png')

const PubItem = (props) => {
    return (
        <Pressable style = {styles.container} onPress={()=>console.log('putaaaaaaaaaaaaa')}>
            <View >
                <View style={styles.vistas}>
                    
                        <LinearGradient colors={['#D1F0FF','#264DA8']}
                        locations = {[0.8, 1]}
                        start={{ x: -1, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.TextBack}>
                            <Text style={styles.Dificult} >{props.dificultad}</Text>
                        </LinearGradient>
                        <View style = {styles.SavedContainer}>
                            <Image source={props.saved} 
                            resizeMode="contain" style={styles.Image}>  
                                
                            </Image>
                        </View>
                        
                </View>
                <Image source={props.image} resizeMode="contain" style={styles.background}>
                    </Image>   
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