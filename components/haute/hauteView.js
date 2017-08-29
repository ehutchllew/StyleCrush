import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default class HauteView extends Component{


  render(){
    var deviceWidth = Dimensions.get('window').width;

    return(

      <View style={[styles.container, {width: deviceWidth}]}>
        <Text>Haute View</Text>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'papayawhip',
    flex: 1,
  }
});
