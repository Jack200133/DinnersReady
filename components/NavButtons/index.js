import React from 'react';
import {View, Text, Pressable, ImageBackground, Image} from 'react-native';

import styles from './style';


const NavButton = (props) => {
    
    
    
    return (
        <View style = {styles.container}>
            <ImageBackground
            //source={"./assets/roxy1.PNG"}
            source={props.url}
            resizeMode="contain"
            style={styles.back}
          >
            <Pressable style = {styles.button}
                 onPress = {() => {
                     console.warn('yes')
                 }}>
                 </Pressable>
            </ImageBackground>
        </View>
    );
};

export default NavButton;