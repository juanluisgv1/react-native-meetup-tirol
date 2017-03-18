/**
 * Created by juangv on 18/03/2017.
 *
 * Profile screen
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//get mock data
import data from './data';

class ProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'Profile',
    }

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text onPress={this._handlePress}>ProfileScreen!</Text>
            </View>
        )
    }

    _handlePress = () => {
        this.props.navigator.push('home');
    }
}

export default ProfileScreen;