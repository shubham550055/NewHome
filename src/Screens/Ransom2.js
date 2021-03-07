import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text, Modal, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "../Component/Header"

import Main2 from "../Component/Main2"
const width = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;



class Ransom2 extends Component {
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
  
  
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.04, backgroundColor: '#e4e4e4' }} />
  
          <View style={{ flex: 0.96, }}>
                {/* Header */}
  
            <View style={{ flex: 0.05, }}>
              <Header />
            </View>
            {/* Main */}
  
            <View style={{ flex: 0.88, }}>
  
              <ScrollView showsVerticalScrollIndicator={false}>
              {/* #F2F2F2 */}
                <View style={{ height: width / 100 * 4 }} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 0.01}} />
                  <View style={{ flex: 0.5, backgroundColor: '#d3d3d3', borderRadius: width / 100 * 5, alignItems: 'center' }}>
                    <TouchableOpacity style={{ height: width /100 * 10, justifyContent: 'center' }}>
                      <Text style={{ fontSize: width / 115 * 4 }}>
                        {"Ransom"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex:0.1}}>
  
                  </View>
                  
                  <View style={{ flex: 0.01, }} />
                  <View style={{ flex: 0.5, backgroundColor: '#d3d3d3', borderRadius: width / 100 * 5, justifyContent: 'center', }}>
                    <TextInput placeholderTextColor={'#000'} placeholder={"                    Search"} style={{ height: width / 100 * 4, marginLeft: width / 100 * 3 }} />
                    <TouchableOpacity style={{ position: 'absolute', marginLeft: width / 100 * 60 }}>
                      <Image  source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{ height: width / 100 * 3, width: width / 100 * 3, }}
  
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 0.01, }} />
                </View>
                <View style={{ height: width / 100 * 5 }} />
                                                {/* Status */}
  
                
                <Main2/>
                
                
              
              
                
                
              </ScrollView>
            </View>
            <View style={{ flex: 0.07, backgroundColor: '#e4e4e4' }}>
              
            </View>
          </View>
  
        </View>
  
      )
    }
  }
  
export default  Ransom2