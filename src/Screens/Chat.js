import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text, Modal, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Chats from '../Component/Chats.js'
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;


export default class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (

            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.05, backgroundColor: '#e4e4e4' }}></View>
                <View style={{ flex: 0.95 }}>
                    <View style={{ flex: 0.05, flexDirection: 'row', backgroundColor: '#e4e4e4', borderBottomWidth: 1, borderBottomColor: '#c4c4c4' }}>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../Assets/arrow.png')} style={{ height: w / 100 * 6, width: w / 100 * 6, resizeMode: 'cover' }} />
                        </View>
                        <View style={{ flex: 0.1, }} />
                        <View style={{ flex: 0.8, justifyContent: 'center', }}>
                            <Text style={{ fontSize: w / 100 * 5, fontWeight: '600', color: '#000' }}>Message</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.95 }}>
                        <ScrollView style={{ backgroundColor: '#e4e4e4', shadowOpacity: 1 }}>
                            <View style={{ height: w / 100 * 3 }} />
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ flex: 0.1, }} />
                                <View style={{ flex: 0.8, justifyContent: 'center', borderWidth: 1, borderColor: '#c4c4c4', borderRadius: w / 100 * 5, }}>
                                    <TextInput placeholder={"                         search,chat or name"} placeholderTextColor={'#000'} style={{ height: w / 100 * 8, marginLeft: w / 100 * 2 }} />
                                </View>
                                <View style={{ flex: 0.1, }} />
                            </View>
                            <View style={{ height: w / 100 * 3 }} />
                            <Chats />
                            <Chats />
                            <Chats />
                            <Chats />
                            <Chats />
                            <Chats />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Chat")}>
                                <View style={{ height: w / 100 * 2, }} />
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ marginLeft: w / 100 * 2 }} />
                                    <View style={{ height: h / 100 * 9, width: h / 100 * 9, backgroundColor: 'white', borderRadius: w, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('../Assets/girls.jpg')} style={{ height: h / 100 * 9, width: h / 100 * 9, resizeMode: 'cover', borderRadius: w }} />
                                    </View>
                                    <View style={{ flex: 0.7, paddingLeft: w / 100 * 2 }}>
                                        <View style={{ flex: 1, justifyContent: 'center', }}>
                                            <Text style={{ fontSize: 16, fontWeight: '600', color: '#7a7a7a' }}>{"Erli"}</Text>
                                        </View>

                                        <View style={{ flex: 1, justifyContent: 'flex-start', }}>
                                            <Text style={{ color: '#7a7a7a' }}>{"Hi there"}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.3, }}>
                                        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 15, fontWeight: '600', color: '#7a7a7a' }}>{"12.02 PM"}</Text>
                                        </View>
                                        <View style={{ flex: 0.5, }}>

                                        </View>
                                    </View>
                                </View>

                                <View style={{ flex: 1, marginTop: w / 100 * 2 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Chat")}>
                                <View style={{ height: w / 100 * 2, }} />
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ marginLeft: w / 100 * 2 }} />
                                    <View style={{ height: h / 100 * 9, width: h / 100 * 9, backgroundColor: 'white', borderRadius: w, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('../Assets/tony.jpg')} style={{ height: h / 100 * 9, width: h / 100 * 9, resizeMode: 'stretch', borderRadius: w }} />
                                    </View>
                                    <View style={{ flex: 0.7, paddingLeft: w / 100 * 2 }}>
                                        <View style={{ flex: 1, justifyContent: 'center', }}>
                                            <Text style={{ fontSize: 16, fontWeight: '600', color: '#7a7a7a' }}>{"Tony stark"}</Text>
                                        </View>

                                        <View style={{ flex: 1, justifyContent: 'flex-start', }}>
                                            <Text style={{ color: '#7a7a7a' }}>{" Fitworked ,im on the way"}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.3, }}>
                                        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 15, fontWeight: '600', color: '#7a7a7a' }}>{"5.02 PM"}</Text>
                                        </View>
                                        <View style={{ flex: 0.5, }}>

                                        </View>
                                    </View>
                                </View>

                                <View style={{ flex: 1, marginTop: w / 100 * 2 }} />
                            </TouchableOpacity>


                        </ScrollView>
                    </View>
                </View>



            </View>
        )
    }
}
