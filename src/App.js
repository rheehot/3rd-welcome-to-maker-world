import React, {Component} from 'react';
import {Modal, Router, Scene} from 'react-native-router-flux';
import TabOne from './screens/Tab/TabOne';
import TabTwo from './screens/Tab/TabTwo';
import TabThree from './screens/Tab/TabPop';

import Main from './screens/Tab/Main';
import Login from './screens/Login'
import LoginBy from './screens/LoginBy'

import SignUp from './screens/SignUp'

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Modal key="root" hideNavBar="true">
          <Scene title="#1" key="Login" component={Login} initial={true} />
          <Scene title="#3" key="LoginBy" component={LoginBy}  />

          <Scene title="#2" key="SignUp" component={SignUp}  />

          <Scene title="#2" key="two" component={TabOne} />
          <Scene title="#3" key="three" component={TabTwo} />
          <Scene title="#4" key="four" component={TabThree} />
        </Modal>
      </Router>
    );
  }
}
