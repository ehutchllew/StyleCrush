const React = require('react-native');
const { StyleSheet, Platform } = React;

let mainAppColor = '#e83b79' //Fucsia
let buttonTextColor = '#daa357'; //Orange-ish color
let buttonTextShadowColor = '#f794b8'; //Light pink
let headerColor = '#e83b79'; //Fucsia


module.exports = StyleSheet.create({
  buttonText:{
    color: mainAppColor,
    fontSize: 20,
    marginLeft: 10,
    textShadowColor: '#f794b8',
    textShadowOffset: {
      width: 0,
      height: 1.2
    },
    textShadowRadius: 1,
  }

});
