import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text,Modal, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Headerh extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foucs1: false,
      foucs2: false,
      Visible:false
    }
  }
  render() {
    return (
        <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'#e4e4e4',shadowOpacity:0.1}}>
            <ScrollView>
            <View style={{flex:1,flexDirection:"row"}}>
          <View style={{flex:0.1,paddingLeft:width/100*2}}>
            <Image source={require('../Assets/Upload.png')} style={{height:width/100*7,width:width/100*7 }}
              
             />
            </View>
            <View style={{flex:0.8,alignItems:'center'}}>
    <Text style={{fontSize:width/100*5,fontWeight:'bold'}}>{"Harish"}</Text>
            </View>
            <View style={{flex:0.1,}}>
            
            </View>

            </View>
            {/* Search */}
            
                </ScrollView>
            </View>
    )
  }
}
