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
  StatusBar
} from 'react-native';

import HomeView from './components/home/homeView.js';
import SideMenu from './components/sideMenu/sideMenu.js';

export default class StyleCrush extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden />
        <HomeView />
        <View style={{position:"absolute"}}>
          <SideMenu />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('StyleCrush', () => StyleCrush);
