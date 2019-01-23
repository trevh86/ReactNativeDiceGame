import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Dice from "./components/Dice";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => navigate('Dice')} title="Game" />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Game: {
    screen: Dice
  }
},
{
  initialRoutName: 'Home'
}
);

export default createAppContainer(AppNavigator);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    flexDirection: "column"
  }
});
