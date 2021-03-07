import React, { component ,} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text, Modal, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home'
import Chat from '../Screens/Chat'
import Video from '../Screens/HomeScreen'
import Ransom2 from '../Screens/Ransom2'
import Follow from '../Screens/Follow'
import Ransom1 from '../Screens/Ransom1'
import Profile from '../Screens/Profile'
const Tab= createBottomTabNavigator();


const Bottom = ({navigaion}) => {
  return (
      
    <Tab.Navigator   barStyle={{ backgroundColor: '#ebebeb' }}  initialRouteName="Discover">
      <Tab.Screen name="Home" options={{   tabBarIcon:({ color }) => (
          <Image source={require('../Assets/home.png')} style={{width:25,height:25}}/>
          ),}}  component={Home}   />
      <Tab.Screen  name="Discover" component={Ransom1} options={{tabBarIcon:({ color }) => (
          <Image source={require('../Assets/picture.png')} style={{width:25,height:25}}/>
          ),}}   />
          <Tab.Screen name="Video" component={Video} options={{tabBarIcon:({ color }) => (
          <Image source={require('../Assets/video.png')} style={{width:25,height:25,}}/>
          ),}}   />
           <Tab.Screen name="Bold" component={Ransom2} options={{tabBarIcon:({ color }) => (
          <Image source={require('../Assets/chat.png')} style={{width:25,height:25,}}/>
          ),}}   />
          <Tab.Screen name='Profile' component={Profile} options={{tabBarIcon:({ color }) => (
          <Image source={require('../Assets/user.png')} style={{width:25,height:25,}}/>
          ),}}   />

      
    </Tab.Navigator>
   
  );
}
export default Bottom;