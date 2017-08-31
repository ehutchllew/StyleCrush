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
} from 'react-native';

import HomeView from './components/home/homeView';
import SideMenu from './components/sideMenu/sideMenu';
import Categories from './components/categoryList/categoryList';
import FeaturedView from './components/featured/featuredView';
import BohemianView from './components/bohemian/bohemianView';
import GrungeView from './components/grunge/grungeView';
import HauteView from './components/haute/hauteView';

import * as Animatable from 'react-native-animatable';

export default class StyleCrush extends Component {
constructor(){
  super();
  this.state = {
    pageView: 0,
  };
}


onMenuChange(index){
  if(index !== this.state.pageView){
    this.refs.mainView.bounceInUp(200).then(
    this.setState({pageView: index}));
  } else{
    return;
  }
}

  render() {
    var deviceWidth = Dimensions.get('window').width;

    var currentView = null;

    if(this.state.pageView === 0){
      currentView = (
        <Categories />
      );
    }
    if(this.state.pageView === 1){
      currentView = (
        <FeaturedView />
      );
    }
    if(this.state.pageView === 2){
      currentView = (
        <BohemianView />
      );
    }
    if(this.state.pageView === 3){
      currentView = (
        <GrungeView />
      );
    }
    if(this.state.pageView === 4){
      currentView = (
        <HauteView />
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Animatable.View ref='mainView'>
          {currentView}
        </Animatable.View>
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
