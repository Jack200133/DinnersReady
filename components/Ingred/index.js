import React from 'react';
import {View,Text} from 'react-native';

import styles from './style';
import NavButton from '../NavButtons';

const Ingred = ({ text}) => {
    
    return (
        <View style = {styles.container}>
            <Text>{text}</Text>
        </View>
    );
};

export default Ingred;