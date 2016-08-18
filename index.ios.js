/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS
} from 'react-native';

import Discover from './Discover';
import Search from './Search';
import Profile from './Profile';

var JitPush = require('jitpush');

class JitPush_Example extends Component {

    constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'discover'
    };
  }

  render() {
    return (

        <TabBarIOS
          selectedTab={this.state.selectedTab}
          tintColor='white'
          barTintColor='black'
        >

          <TabBarIOS.Item
          title='Discover'
          systemIcon='featured'
          renderAsOriginal
          selected={this.state.selectedTab === 'discover'}
          onPress={() => {
            this.setState({
              selectedTab: 'discover'
            });
          }}>
          <Discover/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
          title='Search'
          systemIcon='search'
          selected={this.state.selectedTab === 'search'}
          onPress={() => {
            this.setState({
              selectedTab: 'search'
            });
          }}>
          <Search/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
          title='Profile'
          systemIcon='contacts'
          selected={this.state.selectedTab === 'profile'}
          onPress={() => {
            this.setState({
              selectedTab: 'profile'
            });
          }}>
          <Profile/>
          </TabBarIOS.Item>

        </TabBarIOS>

    );
  }
}

const styles = StyleSheet.create({
  NavBar: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('JitPush_Example', () => JitPush_Example);
