'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  MapView,
  RefreshControl,
} from 'react-native'

const styles = StyleSheet.create({
		description: {
				fontSize: 20,
				backgroundColor: 'white'
		},
		container: {
			flex: 1
		}
})

class SearchResult extends Component {

	render() {
		return (
          
				<View style={styles.container} >
                    
					<Text style={styles.description}>
						Search Result
					</Text>
				</View>
		);
	}
}

module.exports = SearchResult;
