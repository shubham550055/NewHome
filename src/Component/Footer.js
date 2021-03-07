import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text,Modal, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Home from '../Screens/Home'
import {Chat} from '../Screens/Chat'
import LoginScreen from '../Screens/LoginScreen'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Fooder extends Component {
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
        <View style={{flex:1,borderTopColor:'#e4e4e4',borderTopWidth:1,borderBottomColor:'#e4e4e4',flexDirection:'row'}}>
          <View style={{flex:1}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("LoginScreen")} style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
            <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../Assets/home.png')} style={{height:width/100*7,width:width/100*7 ,}}/>
            <Text style={{fontWeight:"bold"}}>Homee</Text>
     
            </View>
</TouchableOpacity>
</View>
<View style={{flex:1}}>
<TouchableOpacity  style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image  source={require('../Assets/photo.png')} style={{height:width/100*7,width:width/100*7 ,}}/>
            <Text style={{fontWeight:"bold"}}>Photoo</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
            <TouchableOpacity style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image  source={require('../Assets/video.png')} style={{height:width/100*8,width:width/100*8 ,}}/>
            <Text style={{fontWeight:"bold"}}>Videoo</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
            <TouchableOpacity style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image  source={require('../Assets/quote.png')} style={{height:width/100*7,width:width/100*7 ,}}/>
            <Text style={{fontWeight:"bold"}}>Quotee</Text>
            </View>
            
            </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
            <TouchableOpacity style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../Assets/pro.png')} style={{height:width/100*7,width:width/100*7 ,}}/>
            <Text style={{fontWeight:"bold"}}>Mee</Text>
            </View>
            </TouchableOpacity>
            </View>
            </View>
          
            )
            }
            }