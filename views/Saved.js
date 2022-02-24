import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import StyledButton from "../components/StyledButton";
import NavBar from "../components/NavBar";
import TitleBar from '../components/TitleBar';

function SavedScreen(props) {
  return (
    <View style={styles.container}>
      <TitleBar/>
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
