import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTurnOn: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>REMOTE{'\n'} SWITCH</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Setting')}>
          <Text style={styles.insteadIcon}>설정 아이콘대신</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.setState({isTurnOn: !this.state.isTurnOn})}>
          <Image
            source={
              this.state.isTurnOn ? require('./on.png') : require('./off.png')
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D8D8D8',
  },
  text: {
    fontSize: 24,
    color: '#5b5a5a',
    textAlign: 'center',
  },
  icon: {
    width: 185,
    height: 300,
    marginTop: 30,
  },
  insteadIcon: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    color: 'blue',
  },
});
