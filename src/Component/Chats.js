import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text,Modal, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;


export default class Chats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foucs: false,
      
    }
  }
  render() {
    return (
      
      <View style={{ flex:1 }}>
          <ScrollView>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Chat")}>
                            <View style={{ height: w / 100 * 2, }} />
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ marginLeft: w / 100 * 2 }} />
                                <View style={{ height: h / 100 * 9, width: h / 100 * 9, backgroundColor: 'white', borderRadius: w, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../Assets/girls.jpg')} style={{ height: h / 100 * 9, width: h / 100 * 9, resizeMode: 'cover' ,borderRadius:w}} />
                                </View>
                                <View style={{ flex: 0.7, paddingLeft: w / 100 * 2 }}>
                                    <View style={{ flex: 1, justifyContent: 'center', }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>{"Harish Denzel🔥"}</Text>
                                    </View>

                                    <View style={{ flex: 1, justifyContent: 'flex-start', }}>
                                        <Text style={{ color: '#000' }}>{"Hi there"}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0.3, }}>
                                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15, fontWeight: '600', color: '#000' }}>{"12.02 PM"}</Text>
                                    </View>
                                    <View style={{ flex: 0.5, }}>

                                    </View>
                                </View>
                            </View>

                            <View style={{ flex: 1, marginTop: w / 100 * 2 }} />
                        </TouchableOpacity>
              </ScrollView>
      </View>
    )
  }
}
