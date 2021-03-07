import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text, Modal, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LoginScreen from '../Screens/LoginScreen'
import Follow from '../Screens/Follow'

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;


class Sign_Up extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 0.93, }}>
                    <ScrollView scrollEnabled={false}>
                        <View style={{ height: h / 100 * 7 }} />


                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ fontSize: w / 100 * 4.3, fontWeight: '600' }}>{"Select Tag"}</Text>
                        </View>
                        <View style={{ height: h / 100 * 5 }} />
                        <View style={{ flex: 1, flexDirection: 'row' }} >
                            <View style={{ flex: 0.25, }} >

                            </View>
                            <View style={{ flex: 0.5, }} >
                                <TouchableOpacity >
                                    <View style={{ flex: 1, backgroundColor: '#7a7a7a', height: h / 100 * 4, borderRadius: w / 100 * 4, justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={{ fontSize: w / 100 * 4, fontWeight: '600', color: '#fff' }}>#All</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.25, }} >

                            </View>
                        </View>
                        <View style={{ height: h / 100 * 5 }} />
                        <View style={{ flex: 1, flexDirection: 'row' }} >
                            <View style={{ flex: 0.25, }} >

                            </View>
                            <View style={{ flex: 0.5, }} >
                                <TouchableOpacity >
                                    <View style={{ flex: 1, backgroundColor: '#7a7a7a', height: h / 100 * 4, borderRadius: w / 100 * 4, justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={{ fontSize: w / 100 * 4, fontWeight: '600', color: '#fff' }}>{"#Heart"}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.25, }} >

                            </View>
                        </View>
                        <View style={{ height: h / 100 * 5 }} />
                        <View style={{ flex: 1, flexDirection: 'row' }} >
                            <View style={{ flex: 0.25, }} >

                            </View>
                            <View style={{ flex: 0.5, }} >
                                <TouchableOpacity>
                                    <View style={{ flex: 1, backgroundColor: '#7a7a7a', height: h / 100 * 4, borderRadius: w / 100 * 4, justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={{ fontSize: w / 100 * 4, fontWeight: '600', color: '#fff' }}>{"#Inspire"}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.25, }} >

                            </View>
                        </View>

                    </ScrollView>
                </View>
                <View style={{ flex: 0.07, backgroundColor: '#000' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(Follow)} style={{ flex: 1, }}>
                        <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: w / 100 * 4, fontWeight: '600', color: 'blue' }}>{"Done"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Sign_Up;