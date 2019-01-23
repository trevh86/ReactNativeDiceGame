import React from "react";
import {
  Image,
  Dimensions,
  Alert,
  View,
  Button,
  Text,
  TouchableWithoutFeedback
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

  static navigationOptions = {title:'Game'}

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
        ? {
            opacity: 0.2
          }
        : {};
      const diceImageStyle = Object.assign(
        {
          flex: 1,
          height: undefined,
          width: undefined
        },
        held
      );
      return (
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          key={index}
          onPress={() => {
            this.Hold(index);
          }}
        >
          {/* Giving Image borderWidth causing weird black bar width. Giving TouchableOpacity 
        borderWidth leaves whitespace between border and the image. */}
          <Image
            style={diceImageStyle}
            source={this.AssignImages(value)}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
      );
    });
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          flexDirection: "column"
        }}
      >
      <StatusBar hidden={route.statusBarHidden} />
        <View style={{ backgroundColor: "grey" }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>Score</Text>
        </View>

        <View
          style={{
            flex: 3,
            justifyContent: "flex-end",
            flexDirection: "row"
          }}
        />

        <View style={{ backgroundColor: "grey" }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>Held Dice</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            flexDirection: "row"
          }}
        />

        <View style={{ backgroundColor: "grey" }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>Rolled Dice</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            flexDirection: "row"
          }}
        >
          {rolledDice}
        </View>

        <View style={{ width: 100, alignSelf: "center", marginBottom: 30 }}>
          <Button title="Roll" onPress={this.Roll} />
        </View>
      </View>
    );
  }
}

// const DeviceWidth = Dimensions.get("window").width / 4;
// const DeviceHeight = Dimensions.get("window").height / 4;
