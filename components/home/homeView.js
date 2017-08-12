import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Interactable from 'react-native-interactable';

export default class HomeView extends Component {
  constructor(){
    super();
  }

  render(){

    return(
      <Interactable.View
       horizontalOnly={true}
       snapPoints={[{x: 0}, {x: -200}]}>
        <View>
          <Text>Hey</Text>
        </View>
      </Interactable.View>
    );

  }
}
