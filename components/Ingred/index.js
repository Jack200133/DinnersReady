import React from 'react';
import {View,Text, Pressable} from 'react-native';

import styles from './style';
import NavButton from '../NavButtons';

const Ingred = ({text, index, removeIngred, AddIngrediente,IndexC}) => {
    
    return (
        <Pressable style = {styles.container} onPress={() => AddIngrediente(text,IndexC,index)}  onLongPress={() => removeIngred(index)}>
            <Text>{text}</Text>
        </Pressable>
    );
};

export default Ingred