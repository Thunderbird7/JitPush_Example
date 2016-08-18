'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import DiscoverList from './DiscoverList'

const styles = StyleSheet.create({
	container: {
	    flex: 1
  	}
});

class Discover extends Component {
  render() {

    return (
    	<NavigatorIOS
        titleTextColor= '#ffffff'
        barTintColor= 'black'
    		style={styles.container}
    		initialRoute={{
    			title: 'Discover Stock',
    			component: DiscoverList
    	}}/>
    );
  }
}

module.exports = Discover;
