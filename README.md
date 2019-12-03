# Rn_IdiaFactory_RemoteSwitch
## IdiaFactory 의 React native 유투브강좌 '앱개발홀로서기' 실습코딩

### LoginScreen Component

#### 1. 로그인페이지 컴퍼넌트 완성
#### 2. 회원가입페이지 컴퍼넌트 코딩에 앞서..
##### - 페이지간 이동을 위해서 네비게이션 라이브러리가 필요함
##### - 네비게이션 라이브러리는 2종류가 있음, React navigation,  React native navigation
##### - react navigation 을 사용하기로 함.
 ```js
 npm install --save react-navigation // react-navigation 설치
 npm install --save react-native-gesture-handler react-native-reanimated react-native-screens // react-navigation의 의존성 라이브러르 3종 설치

 // 추가한 라이브러리를 네이티브와 링크해야함  react native 6.0 이후는 아래처럼 하면 자동으로 링크함
 // 0.59 이전버전은 react-native link react-navigation <== 이런식으로 링크해주어야 함.
 cd ios
 pod install // ios 폴더로 이동하여 설치

 // 안드로이드용은 android/app/build.gradle: 파일내의  dependencies 섹션안에 아래 두줄을 추가한다.
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
 ```

##### 위의 네비게이션 설치시 4.0 버젼이 설치됨, 강좌는 3.0버전으로 진행되는 관계로 3.0버전 추가설치함, 4.0은 추후 공식문서를 살펴보기로 함.
 ```js
yarn add react-navigation@^3.0.0
yarn add react-native-gesture-handler react-native-reanimated

 ```

 #### 3. 회원가입 컴퍼넌트 SignupScreen 완성
 #### 4. App 컴퍼넌트를 네비게이션구성으로 변경-웹의 라우팅과 유사
 ##### - App의 코드전체
 ```js
 mport {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen: SignupScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);
 ```