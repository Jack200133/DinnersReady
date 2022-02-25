import React from 'react';
import {View,Text} from 'react-native';

import styles from './style';
import NavButton from '../NavButtons';

const Ingred = ({ text, color }) => {
    
    return (
        <View style = {styles(color).container}>
            <Text>{text}</Text>
        </View>
    );
};

export default Ingred;