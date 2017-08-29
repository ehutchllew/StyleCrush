import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default class BohemianView extends Component{


  render(){
    var deviceWidth = Dimensions.get('window').width;

    return(

      <View style={[styles.container, {width: deviceWidth}]}>
        <Text>Bohemian View</Text>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'plum',
    flex: 1,
  }
});
