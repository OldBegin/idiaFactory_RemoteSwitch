import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FooterButton from './components/FooterButton';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: false,
      idText: '이메일',
      pwText: '비밀번호',
      id: '',
      pw: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./icon.png')} style={styles.icon} />
        <Text style={styles.welcomeText}>{this.props.text}</Text>
        <TextInput
          placeholder={this.state.idText}
          onChangeText={id => this.setState({id})}
          style={styles.textInputButton}
          autocorrect={false}
        />
        <TextInput
          placeholder={this.state.pwText}
          onChangeText={pw => this.setState({pw})}
          style={styles.textInputButton}
          autocorrect={false}
          secureTextEntry={true}
        />
        <FooterButton
          buttonText="로그인"
          style={styles.loginButton}
          Onpress={() => {}}
        />
        <Text style={styles.noAccountText}>계정이 없으신가요</Text>

        <TouchableOpacity>
          <Text style={styles.makeAccountText}>계정만들기</Text>
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
    backgroundColor: '#d8d8d8',
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 70,
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 23,
  },
  textInputButton: {
    height: 50,
    width: 288,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 0.3,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  loginButton: {
    width: 315,
    height: 50,
    marginTop: 50,
  },
  noAccountText: {
    marginTop: 30,
    fontSize: 12,
    color: '#5b5a5a',
  },
  makeAccountText: {
    fontSize: 12,
    color: '#9013fe',
  },
});
