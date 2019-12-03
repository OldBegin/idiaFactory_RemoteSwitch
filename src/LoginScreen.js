import React, {Component} from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'white',
  },
  Text: {
    fontSize: 24,
    textAlign: 'center',
  },
});
