import React from "react";
import {
  Image,
  Dimensions,
  Alert,
  View,
  Button,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { images } from "./constants";

export default class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rolledDice: [],
      keep: [],
      rolls: 0
    };
  }

  Math = () => Math.floor(Math.random() * 6 + 1);

  Roll = () => {
    if (this.state.rolls < 3) {
      let dice = [];
      for (let i = 0; i < 5; i++) {
        if (this.state.keep.includes(i)) {
          dice.push(this.state.rolledDice[i]);
        } else {
          dice.push(this.Math());
        }
      }
      this.setState({ rolledDice: dice });
    }
  };

  Hold = index => {
    if (!this.state.keep.includes(index))
      this.setState({ keep: [...this.state.keep, index] });
    else this.setState({ keep: this.state.keep.filter(i => i !== index) });
  };

  AssignImages = diceNumber => {
    let newDie;
    switch (diceNumber) {
      case 1:
        return images.One;
      case 2:
        return images.Two;
      case 3:
        return images.Three;
      case 4:
        return images.Four;
      case 5:
        return images.Five;
      case 6:
        return images.Six;
      default:
        Alert.alert("Switch did not work");
    }
    this.setState({ rolledDice: [...this.state.rolledDice, newDie] });
  };

  render() {
    const dice = this.state.rolledDice;
    const rolledDice = dice.map((value, index) => {
      const held = this.state.keep.includes(index)
        ? { elevation:4,
          shadowOffset: { width: 5, height: 5 },
          shadowColor: "blue",
          shadowOpacity: 0.5,
          shadowRadius: 10, }
        : {};
        const diceImageStyle = Object.assign( {flex: 1, height: DeviceHeight, width: DeviceWidth}, held)
      return (
        <TouchableOpacity
          style={diceImageStyle}
          key={index}
          onPress={() => {
            this.Hold(index);
          }}
        >
          <Image
            style={{ flex: 1, height: DeviceHeight, width: DeviceWidth }}
            source={this.AssignImages(value)}
            resizeMode="contain"
          />
        </TouchableOpacity>
      );
    });
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
