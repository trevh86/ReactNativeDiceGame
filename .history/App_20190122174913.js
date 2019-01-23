import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Dice from "./components/Dice";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden />
        <Dice />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: 'space-between',
    flexDirection: "column"
    
  }
});

