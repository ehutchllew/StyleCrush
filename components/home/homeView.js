'use strict';

import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, Image, FlatList, Alert } from 'react-native';

export default class HomeView extends PureComponent {

  constructor(props)
  {
    super(props);

    // this.state = { FlatListItems: [
    //   {key: 'One'},
    //   {key: 'Two'},
    //   {key: 'Three'},
    //   {key: 'Four'},
    //   {key: 'Five'},
    //   {key: 'Six'},
    //   {key: 'Seven'},
    //   {key: 'Eight'},
    //   {key: 'Nine'},
    //   {key: 'Ten'},
    //   {key: 'Eleven'},
    //   {key: 'Twelve'}
    // ]}
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  };

  GetItem (item) {

    Alert.alert(item);

  }


  render() {

    var deviceWidth = Dimensions.get('window').width;
    var deviceHeight = Dimensions.get('window').height;
    return (

      <View>
        <View style={[styles.containerImg, {width: deviceWidth, position: "absolute", zIndex: 5}]}>
          <Image style={{width:150, height: 50}} source={require('../../assets/stylecrush1.png')} />
        </View>
        {/*<View style={[styles.containerImg, {width: deviceWidth}]}>*/}
          {/*<Image style={{width:deviceWidth, height:deviceHeight*.9}} source={require('../../assets/test.jpg')} />*/}
        {/*</View>*/}

        <FlatList

          data={[
            {key: require('../../assets/test.jpg')},
            {key: require('../../assets/test2.jpg')},
            {key: require('../../assets/test3.jpg')},
            {key: require('../../assets/test4.jpg')},
            {key: require('../../assets/test5.jpg')},
            {key: require('../../assets/test6.jpg')},

          ]}
          keyExtractor={(item) => item.key}
          removeClippedSubviews={false}
          showsVerticalScrollIndicator={false}



          // ItemSeparatorComponent = {this.FlatListItemSeparator}

          // renderItem={({item}) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.key)} > {item.key} </Text>}
          renderItem={({item}) => <Image style={styles.item} source={item.key} onPress={this.GetItem.bind(this, item.key)} />}

          />

      </View>

    );
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

    height: (Dimensions.get('window').height)*.9,
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
