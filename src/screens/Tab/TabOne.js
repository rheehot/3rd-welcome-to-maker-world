import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class welcome extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight
          title="aa"
          style={{
            height: 45,
            width: '48%',
            backgroundColor: 'rgb(247,248,251)',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => Actions.three()}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 17,
                color: 'rgb(234,69,90)',
                fontWeight: 'bold',
              }}>
              Button
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
