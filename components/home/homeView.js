import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Interactable from 'react-native-interactable';

export default class HomeView extends Component {
  constructor(){
    super();
  }

  render(){

    var deviceWidth = Dimensions.get('window').width;
    var deviceHeight = Dimensions.get('window').height;

    return(
      <View>
        <View style={[styles.container1, {width: deviceWidth, position: "absolute", zIndex: 5}]}>
          <Image style={{width:150, height: 50}} source={require('../../assets/stylecrush.png')} />
        </View>
        <View style={[styles.containerImg, {width: deviceWidth}]}>
          <Image style={{width:deviceWidth, height:deviceHeight*.9}} source={require('../../assets/test.jpg')} />
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  containerImg: {
    alignItems: 'center'
  },
});

// <Interactable.View
// dragEnabled={true}
//  snapPoints={[{x: 0}]}>
//  <Icon name="rocket" size={30} />
// </Interactable.View>
