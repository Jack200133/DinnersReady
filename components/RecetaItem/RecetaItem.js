import React, { Component } from "react";
import { SafeAreaView, Text, Image, View } from "react-native";
import styles from './styles';

const RecetaItem = ({receta, rating}) => {
    
    const star = require('../../assets/images/star.png')

    return (
        <View style = {styles.container} testID="receta_item">
            <Text style={{fontSize: 17, fontFamily:'Mukta_Bold'}}>{receta}</Text>
            <View style={styles.containerRating}>
                <Text style={{fontSize: 17, fontFamily:'Mukta_Bold'}}>{rating}</Text>
                <Image resizeMode='cover' source = {star} style={styles.image}></Image>
            </View>
        </View>
        
    );
};

export default RecetaItem;
