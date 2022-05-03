import React from 'react';
import {View,Text, Pressable} from 'react-native';

import styles from './style';
import NavButton from '../NavButtons';

const Ingred = ({text, index, removeIngred, AddIngrediente}) => {
    
    return (
        <Pressable style = {styles.container} onPress={() => AddIngrediente(text)}  onLongPress={() => removeIngred(index)}>
            <Text>{text}</Text>
        </Pressable>
    );
};

export default Ingred