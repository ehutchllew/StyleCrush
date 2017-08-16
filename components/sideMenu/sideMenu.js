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
          initialPosition={{x: deviceWidth/1.05}}
          snapPoints={[
            {x: deviceWidth/1.05, tension: 2000, damping: 0.5},
            {x: deviceWidth/2, tension: 2000, damping: 0.5}
          ]}
          // gravityPoints={[
          //   {x:}
          // ]}
          horizontalOnly={true}>
         <View style={[styles.container, {height: deviceHeight}]}>
          <Icon name="ios-arrow-back" size={30} />
        </View>
        </Interactable.View>
      </View>

    );

  }


}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 10,
    justifyContent: 'center'
  }
});
