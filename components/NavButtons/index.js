import React from 'react';
import {View, Text, Pressable, ImageBackground, Image} from 'react-native';

import styles from './style';


const NavButton = (props) => {
    console.log(props.url);
    
    
    return (
        <View style = {styles.container}>
            <ImageBackground
            //source={"./assets/roxy1.PNG"}
            source={props.url}
            resizeMode="cover"
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