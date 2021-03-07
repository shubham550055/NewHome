import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text, Modal, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Mainh from '../Component/Mainh'
import Headerh from '../Component/Headerh'
import Fooderh from '../Component/Fooderh'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Home extends Component {
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
            <Headerh />
          </View>
          {/* Main */}

          <View style={{ flex: 0.95, }}>

            <ScrollView showsVerticalScrollIndicator={false}>

              <View style={{ height: width / 100 * 4 }} />
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.01, }} />
                <View style={{ flex: 0.29, backgroundColor: '#C4C4C4', borderRadius: width / 100 * 5, alignItems: 'center' }}>
                  <TouchableOpacity style={{ height: width / 100 * 8, justifyContent: 'center' }}>
                    <Text style={{ fontSize: width / 100 * 4 }}>
                      {"B/W"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 0.01, }} />
                <View style={{ flex: 0.7, backgroundColor: '#C4C4C4', borderRadius: width / 100 * 5, justifyContent: 'center', }}>
                  <TextInput placeholderTextColor={'#000'} placeholder={"                        Search"} style={{ height: width / 100 * 4, marginLeft: width / 100 * 3 }} />
                  <TouchableOpacity style={{ position: 'absolute', marginLeft: width / 100 * 60 }}>
                    <Image source={require('../Assets/search.png')} style={{ height: width / 100 * 3, width: width / 100 * 3, }}

                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 0.01, }} />
              </View>
              <View style={{ height: width / 100 * 5 }} />
                                              {/* Status */}

              <View style={{ flex: 1 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={{ height: width / 100 * 15, width: width / 100 * 15, marginLeft: width / 100 * 2, backgroundColor: 'red', borderRadius: width, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../Assets/profile.jpg')} style={{ height: width / 100 * 15, width: width / 100 * 15, borderRadius: width }} />
                  </View>
                  <View style={{width:width/100*5}} />
                  <View style={{ height: width / 100 * 15, width: width / 100 * 15, marginLeft: width / 100 * 2, backgroundColor: 'red', borderRadius: width }}>
                    <Image source={require('../Assets/tony.jpg')} style={{ height: width / 100 * 15, width: width / 100 * 15, borderRadius: width }} />
                  </View>
                  <View style={{width:width/100*5}} />
                  <View style={{ height: width / 100 * 15, width: width / 100 * 15, marginLeft: width / 100 * 2, backgroundColor: 'red', borderRadius: width }}>
                    <Image source={require('../Assets/girls.jpg')} style={{ height: width / 100 * 15, width: width / 100 * 15, borderRadius: width }} />
                  </View>
                  <View style={{width:width/100*5}} />
                  <View style={{ height: width / 100 * 15, width: width / 100 * 15, marginLeft: width / 100 * 2, backgroundColor: 'red', borderRadius: width }}>
                    <Image source={require('../Assets/profile.jpg')} style={{ height: width / 100 * 15, width: width / 100 * 15, borderRadius: width }} />
                  </View>
                  <View style={{width:width/100*5}} />
                  <View style={{ height: width / 100 * 15, width: width / 100 * 15, marginLeft: width / 100 * 2, backgroundColor: 'red', borderRadius: width }}>
                    <Image source={require('../Assets/profile.jpg')} style={{ height: width / 100 * 15, width: width / 100 * 15, borderRadius: width }} />
                  </View>
                  
                </ScrollView>
              </View>
              
              <Mainh />
              <Mainh />
              <Mainh />
              <Mainh />

            </ScrollView>
          </View>
          
        </View>

      </View>

    )
  }
}
