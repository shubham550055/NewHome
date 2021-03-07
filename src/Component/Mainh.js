import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text,Modal, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Mainh extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foucs: false,
      
    }
  }
  render() {
    return (
      
      <View style={{ flex:1 }}>
          <View style={{height:width/100*4}} />
          <View style={{flex:1,}}>
            <View style={{flex:1,flexDirection:"row",}}>
           <View style={{height:width/100*10,paddingLeft:width/100*2,justifyContent:'center'}}>
           <View style={{width:width/100*8,height:width/100*8,backgroundColor:'orange',borderRadius:width,alignItems:'center',justifyContent:'center'}}>
               <TouchableOpacity onPress={()=>alert('Profile')}>
           <Image source={require('../Assets/profile.jpg')} style={{height:width/100*8,width:width/100*8 ,borderRadius:width}}
              
              />
              </TouchableOpacity>
</View>
</View>
<View style={{flex:0.9,justifyContent:'center',paddingLeft:width/100*3,}}>
    <Text style={{fontSize:width/100*5,fontWeight:'bold'}}>{"Harish"}</Text>

</View>
              </View>
              <View style={{flex:1,}}>
                 
              <Image source={require('../Assets/tony.jpg')} style={{height:width/100*95,width:width/100*100 ,resizeMode:'cover'}}
              
              />
             
              </View>
              <View style={{flex:1,flexDirection:"row",marginTop:width/100*2}}>
              <View style={{flex:0.02,backgroundColor:'#fff'}}/>
              <View style={{flex:0.24,}}>
              <TouchableOpacity onPress={this.state.foucs==false?()=>this.setState({foucs:true}):()=>this.setState({foucs:false})}>
              <Image source={this.state.foucs==false?require('../Assets/star.png'):this.state.foucs==true?require('../Assets/star1.png'):null} style={{height:width/100*6,width:width/100*6 ,resizeMode:'cover'}}
              
              />
               </TouchableOpacity>
</View>
<View style={{flex:0.24,alignItems:'center',}}>
    <TouchableOpacity onPress={()=>alert('Comment')}>
<Image source={require('../Assets/blogging.png')} style={{height:width/100*6,width:width/100*6 ,resizeMode:'cover'}}
              
              />
              </TouchableOpacity>
</View>
<View style={{flex:0.24,alignItems:'center'}}>
    <TouchableOpacity onPress={()=>alert('Share to..')}>
<Image source={require('../Assets/share.png')} style={{height:width/100*6,width:width/100*6 ,resizeMode:'cover'}}
              
              />
              </TouchableOpacity>
</View>
<View style={{flex:0.24,alignItems:'flex-end',}}>
    <TouchableOpacity onPress={()=>alert('Downloading..')}>
<Image source={require('../Assets/download.png')} style={{height:width/100*6,width:width/100*6 ,resizeMode:'cover'}}
              
              />
              </TouchableOpacity>
</View>
<View style={{flex:0.02,}}/>

              </View>
              <View style={{flex:1,marginTop:width/100*2,paddingLeft:width/100*2}}>
    <Text style={{}}>{"Robert Downey Jr., Actor: Iron Man. Robert Downey Jr. has evolved into one of the most respected actors in Hollywood.......... "}<TouchableOpacity style={{}}><Text style={{fontWeight:'500',color:'#6e6e6e',}}>{" more"}</Text></TouchableOpacity></Text>
    
              </View>

              </View>
      </View>
    )
  }
}