import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LoginScreen from './src/LoginScreen';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>text</Text>
        <LoginScreen text="Login Screen" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  },
});
