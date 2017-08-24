import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Dimensions, Alert, Animated } from 'react-native';
import SideButtons from '../../classes/SideButtons';

import Interactable from 'react-native-interactable';
import Icon from 'react-native-vector-icons/Ionicons';
import sideMenuButtons from '../../content/sideMenu.buttons';

var buttonArray = [];

export default class SideMenu extends Component{

  constructor(){
    super();
    this.state = {
      refreshing: false,
      swoopIn: new Animated.Value(Dimensions.get('window').width*2)
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
        <View style={[styles.individualButton, {width: Dimensions.get('window').width}]} key={newButton.key}>
          <Button title={newButton.title} onPress={() => _onPress()} color='#e83b79' />
        </View>
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
          initialPosition={{x: deviceWidth/1.025}}
          snapPoints={[
            {x: deviceWidth/1.025, tension: 2000, damping: 0.5},
            {x: deviceWidth/2, tension: 2000, damping: 0.5}
          ]}
          gravityPoints={[
            {x: deviceWidth/1.025, strength: 1000, falloff: 50, damping: 0.7}
          ]}
          horizontalOnly={true}>
          <View style={[styles.container, {height: deviceHeight, width: deviceWidth + 10}]}>
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
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'flex-start'
  }
});
