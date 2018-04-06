import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
          source={require("./images/1.png")}
          resizeMode="contain"
        />
        <Image
          style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
          source={require("./images/2.png")}
          resizeMode="contain"
        />
        <Image
          style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
          source={require("./images/3.png")}
          resizeMode="contain"
        />
        <Image
          style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
          source={require("./images/4.png")}
          resizeMode="contain"
        />
        <Image
          style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
          source={require("./images/5.png")}
          resizeMode="contain"
        />
        <Image
          style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
          source={require("./images/6.png")}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
});

const DeviceWidth = Dimensions.get("window").width / 4;
const DeviceHeight = Dimensions.get("window").height / 4;
