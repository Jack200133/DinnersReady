import React from 'react';
import styles from './style';

import { SafeAreaView, Text, View, ImageBackground, ScrollView, Image, Pressable  } from 'react-native';
import Ingred from '../Ingred';

export default function Categories({indexC, name, ingredients, clicked, handleClick, AddIngrediente, removeIngred}){
    return (
        <View>

            {!clicked &&
                <View style={styles.ingredView}>
                
                    <Text style={{fontSize: 20,color: '#05182A', paddingLeft:20, fontFamily:'Mukta_Bold'}}>{name}</Text>
                    
                    <Pressable style={styles.button} nativeID={'boton'+name} onPress = { () => {handleClick(indexC)}}>
                        <Image style={styles.arrow} source={require('../../assets/images/arrow.png')}></Image>
                    </Pressable>
            
                </View>
            }
            {clicked &&
                
                <ScrollView style={styles.scrollCont}>

                    <View style = {styles.ingredTitle}>
                        <Text style={{fontSize: 20,color: '#05182A', paddingLeft:20, fontFamily:'Mukta_Bold'}}>{name}</Text>
                        
                        <Pressable style={styles.button} onPress = { () => {handleClick(indexC)}}>
                            <Image style={styles.arrow} source={require('../../assets/images/arrow.png')}></Image>
                        </Pressable>
                    </View>

                    <View style={styles.iconContainer}>
                        {ingredients.map((ingredient,index) => <Ingred key = {ingredient} text = {ingredient} index={index} IndexC={indexC} AddIngrediente={AddIngrediente} removeIngred={removeIngred}/>)}
                    </View>
    
                </ScrollView>
    
            }
            
        </View>
    )

}
