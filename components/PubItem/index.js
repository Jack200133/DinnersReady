import React from 'react';
import {View,ImageBackground,Image,Text} from 'react-native';

import styles from './style';

const PubItem = (props) => {
    return (
        
        <View style = {styles.container}>
            <Image 
            source={props.image} 
            style={styles.back}>
            </Image>
            <Text style={styles.Title}>{props.NameRecipe}</Text>
            <Text style={styles.Descripcion}>{props.desc}</Text>
            
        </View>
    );
};


export default PubItem;