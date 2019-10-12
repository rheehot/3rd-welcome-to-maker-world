import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView } from 'react-native';
import {
  ScrollableTabView,
  DefaultTabBar,
} from '@valdio/react-native-scrollable-tabview';
import Welcome from './TabOne';
import Welcome2 from './TabTwo';


export default class SimpleExample extends Component {
  constructor(props){
    super(props);

    this.state = { 
        identifedAs: '',
        loading: false
    }
}
  render() {
    return (
      <SafeAreaView style={{flex: 4}}>
        <ScrollableTabView
          tabBarBackgroundColor="white"
          tabBarPosition="bottom"
          renderTabBar={() => <DefaultTabBar />}>
          <Welcome tabLabel="#1" />
          <Welcome2 tabLabel="#2" />
          <Text tabLabel="#3">Hello</Text>
          <Text tabLabel="#4">World!</Text>
        </ScrollableTabView>
      </SafeAreaView>
    );
  }
}
