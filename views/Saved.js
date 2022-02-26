import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import NavBar from "../components/NavBar";
import SearchBart from '../components/NavSearch';

function SavedScreen() {
  return (
    <View style={styles.container}>
      <SearchBart/>
      <Text>Hola desde SAVED</Text>

      <View style={styles.container} />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SavedScreen;
