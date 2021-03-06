import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Dice from "./components/Dice";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dice />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
});

