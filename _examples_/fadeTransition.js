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
  Dimensions,
  Animated,
} from 'react-native';

import HomeView from './components/home/homeView';
import SideMenu from './components/sideMenu/sideMenu';
import FeaturedView from './components/featured/featuredView';

export default class StyleCrush extends Component {
constructor(){
  super();
  this.state = {
    pageView: 0,
    pageAnimation: new Animated.Value(1),
  };
}


onMenuChange(index){
  if(index !== this.state.pageView){
    Animated.sequence([
      Animated.timing(
        this.state.pageAnimation, {
          toValue: 0,
          duration: 200
        }
      ),
      Animated.timing(
        this.state.pageAnimation, {
          toValue: 1,
          duration: 200
        }
      )
    ]).start();

    setTimeout(() => {this.setState({pageView: index})}, 200);
  } else{
    return;
  }
}

  render() {
    var deviceWidth = Dimensions.get('window').width;

    var currentView = null;

    if(this.state.pageView === 0){
      currentView = (
        <HomeView />
      );
    }
    if(this.state.pageView === 1){
      currentView = (
        <FeaturedView />
      );
    }
    if(this.state.pageView === 2){

    }
    if(this.state.pageView === 3){

    }

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Animated.View style={{opacity: this.state.pageAnimation}}>
          {currentView}
        </Animated.View>
        <View style={{position:"absolute", left:deviceWidth*0.975}}>
          <SideMenu onMenuClick={(index) => this.onMenuChange(index)} />
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
