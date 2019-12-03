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
 cd ios
 pod install // ios 폴더로 이동하여 설치

 // 안드로이드용은 android/app/build.gradle: 파일내의  dependencies 섹션안에 아래 두줄을 추가한다.
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
 ```