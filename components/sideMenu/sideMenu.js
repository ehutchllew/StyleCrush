import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Dimensions, Alert } from 'react-native';
import SideButtons from '../../classes/SideButtons';

import Interactable from 'react-native-interactable';
import Icon from 'react-native-vector-icons/Ionicons';
import sideMenuButtons from '../../content/sideMenu.buttons';

const mainStyle = require('../mainStyle');

var buttonArray = [];

export default class SideMenu extends Component{

  constructor(){
    super();
    this.state = {
      refreshing: false,
    }
  }

  componentWillMount(){
    this.populateButtons();
  }

  componentDidMount(){
  }


  populateButtons(){
    buttonArray = [];

    function _onPress(){
      Alert.alert('Button Pressed');
    }

    sideMenuButtons.data.forEach(function(name){
      var newButton = new SideButtons(name);
      newButton.key = 'random' + Math.random();
      buttonArray.push(
        <TouchableHighlight onPress={() => _onPress()} style={[styles.individualButton, {width: Dimensions.get('window').width}]} key={newButton.key} >
            <Text style={mainStyle.buttonText}>{newButton.title}</Text>
        </TouchableHighlight>
      );
    })
  }

  render(){
    //console.log(buttonArray);
    var deviceWidth = Dimensions.get('window').width;
    var deviceHeight = Dimensions.get('window').height;

    return(
      <View>
        <Interactable.View
          dragEnabled={true}
          // initialPosition={{x: deviceWidth/1.025}}
          snapPoints={[
            {x: -deviceWidth*.0005, tension: 2000, damping: 0.6},
            {x: -deviceWidth*.5, tension: 2000, damping: 0.6}
          ]}
          gravityPoints={[
            {x: -deviceWidth*.0005, strength: 500, falloff: 30, damping: 0.7}
          ]}
          horizontalOnly={true}>
          <View style={[styles.container, {height: deviceHeight, width: deviceWidth*1.05}]}>
            <Text style={styles.menuIcon}>|</Text>
            <View style={styles.buttonView}>
              {buttonArray}
            </View>
          </View>
        </Interactable.View>
      </View>

    );

  }


}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  menuIcon:{
    color: 'rgba(255,255,255,0.7)',
    marginLeft: 1,
    fontSize: 30,
    fontWeight: '500',
    alignSelf: 'center'
  },
  buttonView:{
    alignItems: 'flex-start',
    marginLeft: 5
  },
  individualButton:{
    marginTop: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'flex-start',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    padding: 5
  }
});
