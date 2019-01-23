import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {styles} from '../App'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="New Game" onPress={() => this.props.navigation.navigate("Game")} />
      </View>
    )
  }
}
