'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS
} from 'react-native';

import SearchResult from './SearchResult';

const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class Search extends Component {

    render() {
        return (
        	<NavigatorIOS
        		initialRoute={{
        			component: SearchResult,
        			title: 'Search',
        			rightButtonTitle: 'Search'
        		}}
        		style={{flex: 1}}
		    />
        );
    }
}

module.exports = Search;
