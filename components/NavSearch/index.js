import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";
import Styles from './style';
const SearchBart = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [exists, setExists] = React.useState(false)
    //const [value, setValue] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const element = (exist) => {
      if (exist) {
        return (
          <p testID="search_bar_active"></p>
        )
      }
    }

  return (
    <SafeAreaView style = {Styles.container}>
        <SearchBar
            testID="search_bar"
            placeholder="Buscar..."
            onChangeText={onChangeSearch}
            value={searchQuery}
            placeholderTextColor = '#05182A'
            rightIconContainerStyle = {Styles.icon}
            onKeyPress={(e) => {
              if (e =='Enter'){
                setExists(true)
                //exists.current = true
              } else {
                setExists(false)
              } 
            }}
            round = {true}
            inputStyle={Styles.input}
            searchIconColor = '#05182A'
            containerStyle =  {Styles.barra}
            underlineColorAndroid = '#05182A'
            style = {Styles.container}
            inputContainerStyle = {Styles.input}
             
        />
        {
          element(exists)
        }
    </SafeAreaView>
    
  );
};

export default SearchBart;
