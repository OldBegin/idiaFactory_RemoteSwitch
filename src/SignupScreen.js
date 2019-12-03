import React, {Component} from 'react';
import {View, Image, TextInput, Text, StyleSheet} from 'react-native';

import FooterButton from './components/FooterButton';

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '이메일',
      password: '비밀번호',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SWITCH{'\n'}계정 만들기</Text>
        <TextInput
          placeholder="아이디"
          style={styles.textInput}
          onChangeText={email => this.setState({email})}
          autoCorrect={false}
        />
        <TextInput
          placeholder="비밀번호"
          style={styles.textInput}
          onChangeText={password => this.setState({password})}
          autoCorrect={false}
          secureTextEntry={true}
        />
        <Text style={styles.descriptionText}>
          회원가입 시 이용약관에 동의한 것으로 간주합니다.
        </Text>
        <FooterButton buttonText="회원가입" style={styles.signupButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dbdbdb',
  },
  text: {
    fontSize: 16,
    color: '#5b5a5a',
    textAlign: 'center',
    marginTop: 81,
    marginBottom: 115,
  },
  textInput: {
    width: 288,
    borderColor: 'gray',
    borderWidth: 0.3,
    paddingHorizontal: 5,
    borderRadius: 2,
    backgroundColor: 'white',
    height: 50,
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: '200',
    color: '#5b5a5a',
  },
  signupButton: {
    marginTop: 97.5,
  },
});
