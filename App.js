import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Expo, { Constants } from 'expo';


import RootNavigation from './src/navigation/RootNavigation';

export default class App extends Component {
    render() {
        return (
            <RootNavigation />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    }
})



Expo.registerRootComponent(App);
