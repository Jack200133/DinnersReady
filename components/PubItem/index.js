import React from 'react';
import {View,ImageBackground,Image,Text} from 'react-native';
import styles from './style';

const star = require('../../assets/images/star.png')

const PubItem = (props) => {
    return (
        
        <View style = {styles.container}>
            <View style={styles.vistas}>
                
                    <View style = {{...styles.TextBack,backgroundColor: props.color}}>
                        <Text style={styles.Dificult} >{props.dificultad}</Text>
                    </View>
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
    );
};


export default PubItem;