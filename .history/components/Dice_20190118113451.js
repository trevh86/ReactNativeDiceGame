import React from "react";
import { Image, Dimensions, Alert, View, Button } from "react-native";
import { images } from "./constants";

export default class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rolledDice: [] };
  }

  Math = () => Math.floor(Math.random() * 6 + 1);

  Roll = () => {
    let newDie;
    switch (this.Math()) {
      case 1:
        this.state.rolledDice.push = Dice[0];
        return newDie = this.Dice[0];
      case 2:
        this.state.rolledDice.push = Dice[1];
        return newDie = this.Dice[0];
      case 3:
        this.state.rolledDice.push = Dice[2];
        return newDie = this.Dice[0];
      case 4:
        this.state.rolledDice.push = Dice[3];
        return newDie = this.Dice[0];
      case 5:
        this.state.rolledDice.push = Dice[4];
        return newDie = this.Dice[0];
      case 6:
        this.state.rolledDice.push = Dice[5];
        return newDie = this.Dice[5];
      default:
        Alert.alert("Switch did not work");
    }
    this.setState({rolledDice: [...this.state.rolledDice, newDie]});
  };

  Dice = [
    <Image
      style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
      source={images.One}
      resizeMode="contain"
    />,
    <Image
      style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
      source={images.Two}
      resizeMode="contain"
    />,
    <Image
      style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
      source={images.Three}
      resizeMode="contain"
    />,
    <Image
      style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
      source={images.Four}
      resizeMode="contain"
    />,
    <Image
      style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
      source={images.Five}
      resizeMode="contain"
    />,
    <Image
      style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
      source={images.Six}
      resizeMode="contain"
    />
  ];

  render() {
    const dice = this.state.rolledDice;
    return (
      <View>
        <Button title="Roll" onPress={this.Roll} />
      </View>
    );
  }
}

const DeviceWidth = Dimensions.get("window").width / 4;
const DeviceHeight = Dimensions.get("window").height / 4;
