import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";
import Styles from './style';

const SearchBart = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style = {Styles.container}>
        <SearchBar
            placeholder="Buscar..."
            onChangeText={onChangeSearch}
            value={searchQuery}
            leftIconContainerStyle = {Styles.bar}
            placeholderTextColor = 'white'
            rightIconContainerStyle = {Styles.bar}
            round = {true}
            inputStyle={Styles.bar}
            searchIcon = 'white'
            containerStyle =  {Styles.bar}
            underlineColorAndroid = 'white'
            style = {Styles.barra}
            
        />
        
    </SafeAreaView>
    
  );
};

export default SearchBart;
