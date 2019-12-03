import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class FooterButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          style={[styles.buttonContainer, this.props.style]}
          onPress={this.props.onPress}>
          <Image
            source={require('./button.png')}
            title={this.props.buttonName}
            style={styles.footerButton}
          />
          <Text style={styles.footerButtonText}>{this.props.buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 20,
  },
  footerButton: {
    width: 315,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonText: {
    position: 'absolute',
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
