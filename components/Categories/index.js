import React from 'react';
import styles from './style';

import { SafeAreaView, Text, View, ImageBackground, ScrollView, Image, Pressable  } from 'react-native';
import Ingred from '../Ingred';

export default function Categories({index, name, ingredients, clicked, handleClick}){
    return (
        <View>

            {!clicked &&
                <View style={styles.ingredView}>
                
                    <Text style={{fontSize: 20,color: '#4F4F4F', paddingLeft:20}}>{name}</Text>
                    
                    <Pressable style={styles.button} onPress = { () => {handleClick(index)}}>
                        <Image style={styles.arrow} source={require('../../assets/images/arrow.png')}></Image>
                    </Pressable>
            
                </View>
            }
            {clicked &&
                
                <ScrollView style={styles.scrollCont}>

                    <View style = {styles.ingredTitle}>
                        <Text style={{fontSize: 20,color: 'black', paddingLeft:20}}>{name}</Text>
                        
                        <Pressable style={styles.button} onPress = { () => {handleClick(index)}}>
                            <Image style={styles.arrow} source={require('../../assets/images/arrow.png')}></Image>
                        </Pressable>
                    </View>

                    <View style={styles.iconContainer}>
                        {ingredients.map((ingredient) => <Ingred key = {ingredient} text = {ingredient}/>)}
                    </View>
    
                </ScrollView>
    
            }
            
        </View>
    )

}
