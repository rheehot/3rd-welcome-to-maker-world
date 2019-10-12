import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(208,206,206)'}}>
        <SafeAreaView>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => Actions.pop()}
              style={{paddingLeft: 20, paddingTop: 0}}>
              <Text style={{color: 'black', fontSize: 30}}>✕</Text>
            </TouchableOpacity>
            <Text
              style={{
                color: 'rgb(130,130,130)',
                fontSize: 10,
                paddingRight: 10,
              }}>
              계정관련 문의하기
            </Text>
          </View>
          <View style={{paddingLeft: 20, paddingTop: 270}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>로그인</Text>
          </View>
          <View style={{paddingLeft: 20, paddingTop: 40}}>
            <Text style={{color: 'gray'}}>
              기존에 사용했던 계정으로 로그인 하세요
            </Text>
          </View>
          <View style={{alignItems: 'center', paddingTop: 25}}>
            <TouchableOpacity
              style={{
                width: '89%',
                backgroundColor: 'rgb(240,150,55)',
                height: 50,
                borderRadius: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,

                paddingRight: 20,
              }}>
              <Image
                style={{height: 15, width: 30, resizeMode: 'contain'}}
                source={require('../assets/dogfooot.png')}
              />
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                펫썸 로그인
              </Text>
              <Text style={{color: 'white'}}>▶</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', paddingTop: 25}}>
            <Text style={{color: 'gray'}}>또는 아래 소셜 계정으로 로그인</Text>
          </View>
          <View style={{alignItems: 'center', paddingTop: 25}}>
            <TouchableOpacity
              style={{
                width: '89%',
                backgroundColor: 'rgb(226,211,96)',
                height: 50,
                borderRadius: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,

                paddingRight: 20,
              }}>
              <Image
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                source={require('../assets/kakao.png')}
              />
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                카카오톡 로그인
              </Text>
              <Text style={{color: 'white'}}>▶</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', paddingTop: 5}}>
            <TouchableOpacity
              style={{
                width: '89%',
                backgroundColor: 'rgb(234,234,234)',
                height: 50,
                borderRadius: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,

                paddingRight: 20,
              }}>
              <Image
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                source={require('../assets/google.png')}
              />
              <Text style={{color: 'rgb(156,156,156)', fontSize: 18, fontWeight: 'bold'}}>
                구글 로그인
              </Text>
              <Text style={{color: 'white'}}>▶</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', paddingTop: 5}}>
            <TouchableOpacity
              style={{
                width: '89%',
                backgroundColor: 'rgb(67,84,133)',
                height: 50,
                borderRadius: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,

                paddingRight: 20,
              }}>
              <Image
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                source={require('../assets/facebook.png')}
              />
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                페이스북 로그인
              </Text>
              <Text style={{color: 'white'}}>▶</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
