'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, Image, FlatList, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements'

var categoriesJSON = require('../../content/categoryList.categories.json');

export default class Categories extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      categories: categoriesJSON,
      data: []
    }

  }

  FlatListItemSeparator = () => {
    var deviceWidth = Dimensions.get('window').width;
    var deviceHeight = Dimensions.get('window').height;

    return (
        <View
          style={{
            height: 44,
            width: deviceWidth,
            backgroundColor: "#000",
            alignItems: 'center',
            marginBottom: 20
          }}
        >
          <Text style={{color: '#fff', fontSize: 36}}>PREPPY</Text>
        </View>

    );
  };

  CategoryImageSplitView = () => {
    var deviceWidth = Dimensions.get('window').width;
    var deviceHeight = Dimensions.get('window').height;

    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image style={{flex: 1, width: deviceWidth/2, height: deviceHeight*.7}} source={require('../../assets/test.jpg')} />
        <Image style={{flex: 1, width: deviceWidth/2, height: deviceHeight*.7}} source={require('../../assets/test2.jpg')} />
      </View>

    );
  };

  GetItem (item) {

    Alert.alert(item);

  }

  _keyExtractor = (item) => item.category;
  _renderItem = ({item}) => {
    var listImg = '../../' + item.images;
    console.log(listImg);
    return (<View>
      <Text>{item.category}</Text>
      <Image style={styles.item} source={require('../../assets/test.jpg')}/>
      {/*<Image style={styles.item} source={{ uri: listImg }} />*/}
      {/*<Text>{item.images}</Text>*/}

      {/*<Image style={styles.item} source={require(item.images[1].src)}/>*/}

    </View>);
  };

  render() {
    var deviceWidth = Dimensions.get('window').width;
    var deviceHeight = Dimensions.get('window').height;
    console.log(categoriesJSON[0].images[0].src);

    return (
      <View>
        <View style={[styles.containerImg, {width: deviceWidth, position: "absolute", zIndex: 5}]}>
          <Image style={{width:150, height: 50}} source={require('../../assets/stylecrush1.png')} />
        </View>

        <List>
          <FlatList
            data={this.state.categories}
            renderItem = {this._renderItem}
            keyExtractor = {this._keyExtractor}
          />
        </List>
      </View>
    )
  }
}


const styles = StyleSheet.create({

  MainContainer :{

// Setting up View inside content in Vertically center.
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  item: {
    height: (Dimensions.get('window').height)*.8,
    width: (Dimensions.get('window').width),
  },

  container1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },

  containerImg: {
    justifyContent: 'center',
    marginBottom: 1000,
  },

});

AppRegistry.registerComponent('StyleCrush', () => StyleCrush);
