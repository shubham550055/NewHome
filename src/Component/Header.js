import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text,Modal, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Container, Content, Icon, Header, Left, Body, Right, Segment } from 'native-base'
import { useNavigation } from '@react-navigation/native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Headers extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
        activeIndex: 0
    }
}
  render() {
    return (
      

      <View style={{flex:1,shadowOpacity:0.1,marginTop:10}}>
            <ScrollView>
            <View style={{flex:1,flexDirection:"row"}}>
          <View style={{flex:0.1,paddingLeft:width/100*2}}>
            <Image source={require('../Assets/header_left.png')} style={{height:width/100*7,width:width/100*7}}
              
             />
            </View>
            <View style={{flex:0.8,alignItems:'center'}}>
    <Text style={{fontSize:width/90*5,fontWeight:'bold'}}>{"Shopimm"}</Text>
            </View>
            <View style={{flex:0.1,}}>
            <Image source={require('../Assets/header_right.png')} style={{height:width/100*6,width:width/100*6,resizeMode:'contain' }}></Image>
            </View>

            </View>
            {/* Search */}
            
                </ScrollView>
            </View>
   
  
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white'
  }
});

