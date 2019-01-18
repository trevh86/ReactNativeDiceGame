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
    switch (this.Math()) {
      case 1:
        this.state.rolledDice.push = Dice[0];
        return this.setState({rolledDice: rolledDice.push(this.Dice[0])});
      case 2:
        this.state.rolledDice.push = Dice[1];
        return this.setState({rolledDice: rolledDice.push(this.Dice[1])});
      case 3:
        this.state.rolledDice.push = Dice[2];
        return this.setState({rolledDice: rolledDice.push(this.Dice[2])});
      case 4:
        this.state.rolledDice.push = Dice[3];
        return this.setState({rolledDice: rolledDice.push(this.Dice[3])});
      case 5:
        this.state.rolledDice.push = Dice[4];
        return this.setState({rolledDice: rolledDice.push(this.Dice[4])});
      case 6:
        this.state.rolledDice.push = Dice[5];
        return this.setState({rolledDice: rolledDice.push(this.Dice[5])});
      default:
        Alert.alert("Switch did not work");
    }
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
