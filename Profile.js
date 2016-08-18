import NavigationBar from 'react-native-navbar'
'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

class Profile extends Component {

    render() {
      let pugDog = 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Sad-pug.jpg'
      return (
          <View style={styles.container} >
            <Text style={styles.instructions}>
              My Profile
            </Text>
            <Image source={{uri: pugDog}} style={{width: 400, height: 400}} />
          </View>
      );
    }
}

module.exports = Profile;
