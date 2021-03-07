import React from 'react'
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text, Modal, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Sign_Up from '../Screens/Sign_Up'

function SignUp({navigation}) {
    return (
        <View>
          <Text style={{alignSelf:"center",marginTop:70,fontWeight:"bold",fontSize:20}}>Shopimm</Text>
        <TextInput
        placeholder="Enter UserName"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,marginTop:50,   width: '90%',
        paddingLeft:5,
        borderRadius: 8,
        color: 'black',
        alignSelf:"center" }}
      />
    
    <TextInput
        secureTextEntry={true}
        placeholder="Enter Password"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,marginTop:30,   width: '90%',
        paddingLeft:5,
        borderRadius: 8,
        color: 'black',
        alignSelf:"center" }}
      />
    <View style={{width:'90%',alignSelf:"center",marginTop:20}}>
    <Button
            title="SignUp"
            onPress={() => navigation.navigate(Sign_Up)}
          />
    </View>
          
    
      </View>
    
    
      
    
      
    
      
    )
}

export default SignUp
