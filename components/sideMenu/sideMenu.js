import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Button, Dimensions } from 'react-native';

import Interactable from 'react-native-interactable';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SideMenu extends Component{

  render(){
    var deviceWidth = Dimensions.get('window').width;
    var deviceHeight = Dimensions.get('window').height;

    return(
      <View>
        <Interactable.View
        dragEnabled={true}
         snapPoints={[{x: deviceWidth/1.05, y: deviceHeight/2.15}]}>
         <Icon name="ios-arrow-back" size={30} />
        </Interactable.View>
      </View>

    );

  }


}

const styles = StyleSheet.create({

});
