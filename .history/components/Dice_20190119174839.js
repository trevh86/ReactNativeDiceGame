import React from "react";
import { Image, Dimensions, Alert, View, Button, Text } from "react-native";
import { images } from "./constants";

export default class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rolledDice: [] };
  }

  Math = () => Math.floor(Math.random() * 6 + 1);

  Roll = () => {
    let dice = [];
    for (let i = 0; i < 5; i++) {
      dice.push(this.Math());
    this.setState({rolledDice: dice})
    }
  }

  AssignImages = (diceNumber) => {
    let newDie;
    switch (diceNumber) {
      case 1:
        return images.One;
      case 2:
      return images.One;
      case 3:
      return images.One;
      case 4:
      return images.One;
      case 5:
      return images.One;
      case 6:
      return images.One;
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
    const rolledDice = dice.map((value, index) => {
      return (
        <Image
      style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
      source={this.AssignImages(value)}
      resizeMode="contain"
    />
      )
    })
    return (
      <View>
        {rolledDice}
        <Button title="Roll" onPress={this.Roll} />
      </View>
    );
  }
}

const DeviceWidth = Dimensions.get("window").width / 4;
const DeviceHeight = Dimensions.get("window").height / 4;
