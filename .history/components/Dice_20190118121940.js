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
    const dice = [this.Math];
    dice = dice.push(this.Math);
  }

  AssignImages = () => {
    let newDie;
    switch (this.Math()) {
      case 1:
        newDie = this.Dice[0];
        break;
      case 2:
        newDie = this.Dice[1];
        break;
      case 3:
        newDie = this.Dice[2];
        break;
      case 4:
        newDie = this.Dice[3];
        break;
      case 5:
        newDie = this.Dice[4];
        break;
      case 6:
        newDie = this.Dice[5];
        break;
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
        <Text>{dice}</Text>
        <Button title="Roll" onPress={this.Roll} />
      </View>
    );
  }
}

const DeviceWidth = Dimensions.get("window").width / 4;
const DeviceHeight = Dimensions.get("window").height / 4;
