import React from 'react';
import {View,Text, Pressable} from 'react-native';
import styles from './style';


const Ingred = ({text, index, removeIngred, AddIngrediente,IndexC}) => {
    
    return (
        <Pressable nativeID={text} style = {styles.container} onPress={() => AddIngrediente(text,IndexC,index)} onLongPress={() => removeIngred(text)}>
            <Text  style = {{fontFamily:'Mulish_Regular'}}>{text}</Text>
        </Pressable>
    );
};

export default Ingred