import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';

import NavButton from '../NavButtons';

const NavBar = (props) => {
    const home = require('../../assets/images/home.png');
    const profile = require('../../assets/images/perfil.png');
    const bookmarks = require('../../assets/images/bookmark.png');
    const newrecipe = require('../../assets/images/newrecipe.png');
    const alacena = require('../../assets/images/home.png');

    return (
        <View style = {styles.container}>
           <NavButton url={alacena}/>
           <NavButton url={newrecipe}/>
           <NavButton url={home}/>
           <NavButton url={bookmarks}/>
           <NavButton url={profile}/>
        </View>
    );
};


export default NavBar;