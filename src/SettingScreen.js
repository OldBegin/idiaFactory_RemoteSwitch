import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FooterButton from './components/FooterButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Main')}
          style={styles.arrowContainer}>
          <Text style={styles.arrowLeft}>🔙</Text>
        </TouchableOpacity>
        <Image source={require('./icon.png')} style={styles.icon} />
        <Text style={styles.currentVersionText}>현재버전: 1.0.0</Text>
        <Text style={styles.currentVersionText}>지원환경: IOS 7.0 이상</Text>
        <FooterButton buttonText="로그아웃" style={styles.FooterButton} />
        <Text style={styles.currentVersionText}>
          ©️ 원래는 웹을하려고 했었다.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d8d8d8',
  },
  text: {
    fontSize: 24,
    color: '#d8d8d8',
  },
  icon: {
    marginVertical: 10,
    width: 70,
    height: 70,
  },
  currentVersionText: {
    fontSize: 16,
    marginVertical: 15,
    color: '#5b5a5a',
  },
  footerButton: {
    marginTop: 30,
  },
  arrowLeft: {
    fontSize: 36,
  },
  arrowContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
});
