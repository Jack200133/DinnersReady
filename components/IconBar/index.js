import React from 'react';
import {View} from 'react-native';

import styles from './style';
import NavButton from '../NavButtons';

const IconBar = ({ image, color }) => {
    
    return (
        <View style = {styles(color).container}>
            <NavButton url={image}/>
        </View>
    );
};

export default IconBar;