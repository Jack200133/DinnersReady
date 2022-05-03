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
            placeholderTextColor = 'white'
            rightIconContainerStyle = {Styles.icon}

            round = {true}
            inputStyle={Styles.input}
            searchIconColor = 'white'
            containerStyle =  {Styles.barra}
            underlineColorAndroid = 'white'
            style = {Styles.container}
            inputContainerStyle = {Styles.input}
             
        />
        
    </SafeAreaView>
    
  );
};

export default SearchBart;
