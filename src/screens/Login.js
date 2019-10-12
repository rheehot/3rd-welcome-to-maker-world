import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/background.png')}
        style={{flex: 1, resizeMode: 'stretch'}}>
        <SafeAreaView>
          <View
            style={{
              paddingTop: 40,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 50, color: 'white', fontWeight: 'bold'}}>
              PETSOME
            </Text>
          </View>

          <View style={{paddingTop: 220, paddingLeft: 20}}>
            <Text style={{color: 'white', fontSize: 25}}>지금 반려동물을</Text>
            <Text style={{color: 'white', fontSize: 25}}>등록하세요</Text>
          </View>
          <View style={{paddingTop: 30, paddingLeft: 20}}>
            <Text style={{color: 'white', fontSize: 15}}>
              등록만 하면 펫썸이 관리해드려요
            </Text>
          </View>
          <View
            style={{
              paddingTop: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => Actions.push('SignUp', {})}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: 75,
                backgroundColor: 'rgb(240,150,55)',
                borderRadius: 10,
                border: 1,
              }}>
              <View styel={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{color: 'white', fontSize: 23, fontWeight: 'bold'}}>
                  시작하기
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              paddingTop: 50,
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <Text style={{color: 'white'}}>이미 사용중이신가요?</Text>
              <TouchableHighlight style={{paddingLeft: 20}}
                            onPress={() => Actions.push('LoginBy', {})}

              >

                <Text style={{color: 'white', textDecorationLine: 'underline'}}>로그인</Text>
              </TouchableHighlight>
          </View>
          <View style={{paddingTop:70,paddingLeft:20,}}>
              <Text style={{color:'white'}}>
                  계속 진행시, 서비스 이용약관 및 개인정보 취금방침,
              </Text>
              <Text style={{color:'white'}}>
                  위치정보 제공에 동의하게 됩니다.
              </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
