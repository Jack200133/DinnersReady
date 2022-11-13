import React from 'react';
import {View,Text, Pressable, TextInput} from 'react-native';
import styles from './style';

const changeIng = (state, setState, index, e) => {
    console.log(e)
    const temp = [...state]
    temp[index].ing = e
    setState(temp)
}

const changeCant = (state, setState, index, e) => {
    const temp = [...state]
    temp[index].cantidad = e
    setState(temp)
}

const Ingrediente = ({ingrediente, cantidad, index, state, setState}) => {
    return (
        <View style={styles.container}>
            <TextInput onChangeText={(e) => changeIng(state, setState, index, e)} style={styles.input} value={ingrediente} placeholder='Ingresa tu ingrediente'  nativeID={`iningre${index}`} testID='iningre' />
            <TextInput onChangeText={(e) => changeCant(state, setState, index, e)} style={styles.input} value={cantidad} placeholder='Ingresa su cantidad' nativeID={`incat${index}`} testID='incat' />
        </View>
    )
}

export default Ingrediente