import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text, Modal, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Navigation from './src/Route/Stack/Navigation'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foucs1: false,
      foucs2: false,
      Visible: false
    }
  }
  render() {
    return (

      <View style={{ flex: 1 ,justifyContent:'center'}}>
       <Navigation />
      </View>

    )
  }
}
