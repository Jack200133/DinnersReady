import React from 'react';
import {View,Text, Pressable} from 'react-native';
import usePress from "use-double-press";
import styles from './style';


const Ingred = ({text, index, removeIngred, AddIngrediente,IndexC}) => {


    const pressHandler = usePress({
        onPress: () => {AddIngrediente(text,IndexC,index)},
        onDoublePress: () => {removeIngred(text)},
        delay: 200,
    });
    
    return (
        <Pressable nativeID={text} style = {styles.container} onPress={pressHandler}>
            <Text  style = {{fontFamily:'Mulish_Regular'}}>{text}</Text>
        </Pressable>
    );
};

export default Ingred