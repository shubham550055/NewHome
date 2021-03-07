import React, { component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sign_Up from '../../Screens/Sign_Up'
import Chat from '../../Screens/Chat'
import Home from '../../Screens/Home'
import LoginScreen from '../../Screens/LoginScreen'
import SignUp from '../../Screens/SignUp'
import Follow from '../../Screens/Follow'
import MainScreen from '../../Screens/MainScreen';
import  Radsome1 from  '../../Screens/Ransom1';
import MainTab from '../../Screens/MainTab';
import HomeScreen from '../../Screens/HomeScreen';
import  AllUserProfileScreen from  '../../Screens/AllUserProfileScreen'

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="LoginScreen" >
                <Stack.Screen name='Sign_Up' component={Sign_Up}  />
                {/* <Stack.Screen name='Signup' component={Signup} options={{ title: 'Member', headerStyle: { backgroundColor: '#3D93D7' }, headerTintColor: '#fff' }} /> */}
                <Stack.Screen name='Chat' component={Chat} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
                
                <Stack.Screen name='Follow' component={Follow}  options={{ headerShown: false }}/>
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='MainScreen' component={MainScreen}  options={{ headerShown: false }} />
                <Stack.Screen name='Radsom1' component={Radsome1}  options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='MainTab' component={MainTab} options={{ headerShown: false }} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='AllUserProfileScreen' component={AllUserProfileScreen} options={{ headerShown: false }} />
             
            </Stack.Navigator>
         
        </NavigationContainer>
    );
}

export default Navigation;