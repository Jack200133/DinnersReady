import React, { Component } from "react";
import { SafeAreaView, Text, Image, View } from "react-native";
import styles from './styles';

const RecetaItem = ({receta, rating}) => {
    
    const star = require('../../assets/images/star.png')

    return (
        <View style = {styles.container}>
            <Text style={{fontSize: 17}}>{receta}</Text>
            <View style={styles.containerRating}>
                <Text style={{fontSize: 17}}>{rating}</Text>
                <Image resizeMode='cover' source = {star} style={styles.image}></Image>
            </View>
        </View>
        
    );
};

export default RecetaItem;
