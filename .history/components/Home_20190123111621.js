import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {styles} from '../App'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
