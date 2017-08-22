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
  StatusBar,
} from 'react-native';

import HomeView from './components/home/homeView';
import SideMenu from './components/sideMenu/sideMenu';

export default class StyleCrush extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View>
          <HomeView />
        </View>
        {/*<View style={{position:"absolute", zIndex: 5}}>*/}
          {/*<SideMenu />*/}
        {/*</View>*/}
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
