'use strict'

import React, { Component } from 'react';
import {
	Image,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    ActivityIndicatorIOS
} from 'react-native';

var JitPush = require('jitpush');

var styles = StyleSheet.create({
	container: {
	    flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'white',
			padding: 4
  	},
		backDrop: {
			flex: 1,
			height: 120,
			justifyContent: 'center',
			alignItems: 'center'
		},
		backDropView: {
			width: 250,
			height: 60,
			backgroundColor: 'white',
			opacity: 0.5
		},
		title: {
			fontSize: 20,
			textAlign: 'center',
			backgroundColor: 'transparent'
		},
  	label: {
  		fontSize: 15,
			fontWeight: 'bold',
			textAlign: 'center',
			paddingTop: 10,
			backgroundColor: 'transparent'

  	},
		separator: {
			height: 0,
			backgroundColor: '#ffffff'
		}
});

var DiscoverData = [
		{stockInfo: {title: 'Singapore', label: 'SGX', imageURL: 'https://www.singaporeair.com/saar5/images/navigation/plan-travel/packages/singapore-stopover-holiday.jpg'}},
		{stockInfo: {title: 'Thailand', label: 'SET, MAI', imageURL: 'https://imghtlak.mmtcdn.com/blog/sites/default/files/thailand-wat-phra-kaew-and-grand.jpg'}},
		{stockInfo: {title: 'United States', label: 'NASDAQ, NYSE', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/95/San_Francisco_Oakland_Bay_Bridge_at_night.jpg'}},
		{stockInfo: {title: 'Hong Kong', label: 'HKG', imageURL: 'https://www.scmp.com/sites/default/files/2015/03/13/59ff22816b5c51d8a2ca6e0284d234f9.jpg'}},
		{stockInfo: {title: 'Vietnam', label: 'VNM', imageURL: 'https://s-media-cache-ak0.pinimg.com/originals/0d/44/65/0d4465c7b14ddd0859b1656797ff36da.jpg'}}
];

class DiscoverList extends Component {
	// Initialize hardcore data
	constructor(props) {
		super(props);

		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			})
		};
	}

	componentDidMount() {
		var data = DiscoverData;
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(data)
		});
	}

	renderHeader() {
		return (
			<View>
					<Text style={{marginTop: 10, fontWeight: 'bold', color: 'dimgray'}}> EXPLORE BY COUNTRY (Patch version { JitPush.jsCodeVersion }) </Text>
					<Text style={{marginTop: 10, fontWeight: 'bold', color: 'dimgray'}}> Jitta 1st time </Text>
			</View>
		)
	}

	renderDiscoverRow(data) {
		return (

			<TouchableHighlight>
				<View>
					<View style={styles.container}>
						<Image source={{uri: data.stockInfo.imageURL}}
							style={styles.backDrop}>
								<View style={styles.backDropView}>
									<Text style={styles.title}> {data.stockInfo.title} </Text>
									<Text style={styles.label}> {data.stockInfo.label} </Text>
								</View>
						</Image>
					</View>
					<View style={styles.separator} />
				</View>
			</TouchableHighlight>
		)
	}

	render() {


		return (
				<ListView
						dataSource={this.state.dataSource}
						renderRow={this.renderDiscoverRow.bind(this)}
						renderHeader={this.renderHeader}
						style={styles.listView}
				/>
		);
	}
}

module.exports = DiscoverList;
