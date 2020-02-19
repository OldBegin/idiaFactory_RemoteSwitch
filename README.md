# Rn_IdiaFactory_RemoteSwitch
## IdiaFactory 의 React native 유투브강좌 '앱개발홀로서기' 실습코딩


## 10-MobileApp_UI 1 
===================

### LoginScreen Component
#### 1. 로그인페이지 컴퍼넌트 완성



## 11-MobileApp_UI 2 
===================
### 네비게이션구현

#### 회원가입페이지 작성: ./src/SignupScreen
#### 라이브러리: react-navigation 설치
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
 ##### App 컴퍼넌트를 네비게이션구성으로 변경-웹의 라우팅과 유사
 ##### App의 네비게이션 라우팅 코드 전체
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



## 12-MobileApp_UI 3
=====================
 
 ### 세팅페이지 구현: ./src/SettingScreen
 ### 메인페이지(스위치 On/Off)구현: ./src/MainScreen
 #### 라이브러리 : react-native-vector-images 추가



## 13-Firebase_1
=================
### 구글에서 제공하는 react native에서 사용할 데이터베이스 라이브러리 설치
#### firebase 연동에 앞서 사전설정
- ios 연동을 위한 cocoapods 설치
- cocoapod 은 ios 네이티브를 위한 패키지관리툴
```js
brew install cocoapods
cd ios
pod init // podfile 생성함 : npm init 명령으로 package.json 파일 생성하는것과 비슷함.
pod install // podfile 에 등록되어있는 의존성 라이브러리 설치
```
####  firebase 설치
```js
npm install --save react-native-firebase // firebase 설치
```

#### firebase 사이트(https://console.firebase.google.com) 에서 데이터베이스 생성
- 프로젝트생성
- bundle 아이디 는 xcode에서 프로젝트를 열어서 ReomoteSwitch/ios/RemoteSwitch.xcodeproj 를 열고 왼쪽사이드바에서 RemoteSwitch 를 클릭하면 확인할수 있다.
- 닉네임은 아무거나 입력
- 앱등록
- 구성파일 다운로드하여 xcode의 프로젝트폴더내에 복사 파일이름 변경하면 안됨 => GoogleService-Info.plist 이어야함.
- 

```Swift
// Swift
import UIKit
import Firebase

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

  var window: UIWindow?

  func application(_ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions:
      [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    FirebaseApp.configure()
    return true
  }
}
```
```Objective-C
// Objective-C
@import UIKit;
@import Firebase;

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
    didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [FIRApp configure];
  return YES;
}
```
made from revert 1
made from revert 2

-----------------------------
commit 1
commit 2
<<<<<<< HEAD
commit 3-1
commit 4-1
after revert revert 5-1
=======
commit 3-1
>>>>>>> parent of d44deb6... commit 4-1
