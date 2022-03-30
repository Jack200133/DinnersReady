import React from 'react';
import {View,Text, Pressable} from 'react-native';

import styles from './style';
import NavButton from '../NavButtons';

const Ingred = ({ text}) => {
    
    return (
        <Pressable style = {styles.container}>
            <Text>{text}</Text>
        </Pressable>
    );
};

export default Ingred;