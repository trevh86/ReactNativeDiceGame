import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Dice from "./components/Dice";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: { screen: App },
    Game: { screen: Dice }
  },
  {
    initialRoutName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    flexDirection: "column"
  }
});
