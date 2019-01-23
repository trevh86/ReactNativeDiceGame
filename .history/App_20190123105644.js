import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Dice from "./components/Dice";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
},
{
  initialRoutName: 'Home'
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
