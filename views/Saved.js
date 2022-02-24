import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import StyledButton from "../components/StyledButton";
import NavBar from "../components/NavBar";

function SavedScreen(props) {
  return (
    <View style={styles.container}>
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
