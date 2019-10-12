import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class SingUp extends Component {
  state = {
    dogPushed: false,
    catPushed: false,
    etcPushed: false,
  };

  _toggleDog() {
    if (this.state.dogPushed === false) {
      this.setState({dogPushed: true});
    } else {
      this.setState({dogPushed: false});
    }
  }
  _toggleCat() {
    if (this.state.catPushed === false) {
      this.setState({catPushed: true});
    } else {
      this.setState({catPushed: false});
    }
  }
  _toggleEtc() {
    if (this.state.etcPushed === false) {
      this.setState({etcPushed: true});
    } else {
      this.setState({etcPushed: false});
    }
  }

  render() {
    return (
      <ImageBackground
        opacity={0.1}
        source={require('../assets/splash.png')}
        style={{flex: 1, resizeMode: 'stretch'}}>
        <SafeAreaView style={{opacity: 1.0}}>
          <TouchableOpacity
            onPress={() => Actions.pop()}
            style={{paddingLeft: 20, paddingTop: 0}}>
            <Text style={{color: 'black', fontSize: 30}}>✕</Text>
          </TouchableOpacity>
          <View style={{paddingLeft: 20, paddingTop: 10}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'rgb(78,62,46)',
              }}>
              어떤 반려동물과 함께하세요?
            </Text>
          </View>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => this._toggleDog()}
                style={{
                  bforderRadius: 50,

                  width: 100,
                  height: 100,
                }}>
                {this.state.dogPushed === true ? (
                  <Image
                    source={require('../assets/circle_dog.png')}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                    }}
                  />
                ) : (
                  <Image
                    source={require('../assets/circle_dog_unpushed.png')}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                    }}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={{
                  paddingTop: 10,
                  fontWeight: 'bold',
                  color: 'rgb(78,62,46)',
                }}>
                강아지
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => this._toggleCat()}
                style={{
                  borderRadius: 50,
                  width: 100,
                  height: 100,
                }}>
                {this.state.catPushed === true ? (
                  <Image
                    source={require('../assets/circle_cat.png')}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                    }}
                  />
                ) : (
                  <Image
                    source={require('../assets/circle_cat_unpushed.png')}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                    }}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={{
                  paddingTop: 10,
                  fontWeight: 'bold',
                  color: 'rgb(78,62,46)',
                }}>
                고양이
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => this._toggleEtc()}
                style={{
                  borderRadius: 50,
                  width: 100,
                  height: 100,
                }}>
                {this.state.etcPushed === true ? (
                  <Image
                    source={require('../assets/circle_etc.png')}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                    }}
                  />
                ) : (
                  <Image
                    source={require('../assets/circle_etc_unpushed.png')}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                    }}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={{
                  paddingTop: 10,
                  fontWeight: 'bold',
                  color: 'rgb(78,62,46)',
                }}>
                그 외
              </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                paddingTop: 20,
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingLeft: 80,
                paddingRight: 80,
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => Actions.push('four', {})}
                  style={{
                    width: 100,
                    height: 100,
                  }}>
                  <Image
                    source={require('../assets/square_pet.png')}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    paddingTop: 10,
                    fontWeight: 'bold',
                    color: 'rgb(78,62,46)',
                  }}>
                  반려동물 사진등록
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    width: 100,
                    height: 100,
                  }}>
                  <Image
                    source={require('../assets/square_nose.png')}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    paddingTop: 10,
                    fontWeight: 'bold',
                    color: 'rgb(78,62,46)',
                  }}>
                  비문등록
                </Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', paddingTop: 40}}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 30,
              }}>
              <View style={{paddingRight: 10}}>
                <Image
                  style={{height: 15, width: 30, resizeMode: 'contain'}}
                  source={require('../assets/name.png')}
                />
              </View>
              <Text
                style={{
                  paddingRight: 10,
                  fontWeight: 'bold',
                  color: 'rgb(78,62,46)',
                  fontSize: 15,
                }}>
                이름:
              </Text>
              <TextInput
                style={{width: 110, borderBottomWidth: 0.5}}></TextInput>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 30,
              }}>
              <View style={{paddingRight: 10}}>
                <Image
                  style={{height: 15, width: 30, resizeMode: 'contain'}}
                  source={require('../assets/age.png')}
                />
              </View>
              <Text
                style={{
                  paddingRight: 10,
                  fontWeight: 'bold',
                  color: 'rgb(78,62,46)',
                  fontSize: 15,
                }}>
                나이:
              </Text>
              <TextInput
                style={{width: 110, borderBottomWidth: 0.5}}></TextInput>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 30,
              }}>
              <View style={{paddingRight: 10}}>
                <Image
                  style={{height: 15, width: 30, resizeMode: 'contain'}}
                  source={require('../assets/diary.png')}
                />
              </View>
              <Text
                style={{
                  paddingRight: 10,
                  fontWeight: 'bold',
                  color: 'rgb(78,62,46)',
                  fontSize: 15,
                }}>
                품종:
              </Text>
              <TextInput
                style={{width: 110, borderBottomWidth: 0.5}}></TextInput>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 30,
              }}>
              <View style={{paddingRight: 10}}>
                <Image
                  style={{height: 15, width: 30, resizeMode: 'contain'}}
                  source={require('../assets/sex.png')}
                />
              </View>
              <Text
                style={{
                  paddingRight: 10,
                  fontWeight: 'bold',
                  color: 'rgb(78,62,46)',
                  fontSize: 15,
                }}>
                성별:
              </Text>
              <TextInput
                style={{width: 110, borderBottomWidth: 0.5}}></TextInput>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 30,
              }}>
              <View style={{paddingRight: 10}}>
                <Image
                  style={{height: 15, width: 30, resizeMode: 'contain'}}
                  source={require('../assets/weight.png')}
                />
              </View>
              <Text
                style={{
                  paddingRight: 10,
                  fontWeight: 'bold',
                  color: 'rgb(78,62,46)',
                  fontSize: 15,
                }}>
                체중:
              </Text>
              <TextInput
                style={{width: 110, borderBottomWidth: 0.5}}></TextInput>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 30,
              }}>
              <View style={{paddingRight: 10}}>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../assets/etc.png')}
                />
              </View>
              <Text
                style={{
                  paddingRight: 10,
                  fontWeight: 'bold',
                  color: 'rgb(78,62,46)',
                  fontSize: 15,
                }}>
                기타:
              </Text>
              <TextInput
                style={{width: 110, borderBottomWidth: 0.5}}></TextInput>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
