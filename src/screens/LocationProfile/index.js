/**
 * Created by juangv on 18/03/2017.
 *
 * Home screen
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//get mock data
import data from './data';

class LocationProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'Location',
    }

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text>LocationProfile!</Text>
            </View>
        )
    }

}

export default LocationProfileScreen;