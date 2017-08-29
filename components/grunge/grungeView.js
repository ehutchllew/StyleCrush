import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default class GrungeView extends Component{


  render(){
    var deviceWidth = Dimensions.get('window').width;

    return(

      <View style={[styles.container, {width: deviceWidth}]}>
        <Text>Grunge View</Text>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'palegreen',
    flex: 1,
  }
});
