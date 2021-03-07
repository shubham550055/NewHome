import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Sign_Up from './Sign_Up';
import Signup from './SignUp';



const LoginScreen = ({navigation}) => {
  const [mobile, setmobile] = useState();

  const [password, setPassword] = useState();

  const [errors, setErrors] = useState('');
  const [isValid, setValid] = useState(true);
  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  // const { colors } = useTheme();

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#111111" barStyle="light-content" />

      <Animatable.View style={styles.footer}>
        <Text
          style={{
            fontSize: 32,
            
            fontFamily: 'SemiBold',
            textAlign: 'center',

            color: 'white',

            marginTop:100,
          }}>
          Welcome To Shopify
        </Text>

        <View style={styles.action}>
          
          <TextInput
            placeholder="Username or phone number"
            placeholderTextColor="#666666"
            style={[styles.textInput]}
            autoCapitalize="none"
            onChangeText={(mobile) => {
              setmobile(mobile);
            }}
            error={isValid}
          />
        </View>

        <View style={styles.action1}>
          
          <TextInput
            placeholder="Password"
             
            secureTextEntry={data.secureTextEntry}
            placeholderTextColor="#666666"
            style={[styles.textInput]}
            autoCapitalize="none"
            errors={isValid}
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <FontAwesome
                name="eye-slash"
                color="grey"
                size={20}
                style={{paddingRight: 24}}
              />
            ) : (
              <FontAwesome
                name="eye"
                color="grey"
                size={20}
                style={{paddingRight: 24}}
              />
            )}
          </TouchableOpacity>
        </View>

        {errors ? (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{errors}</Text>
          </Animatable.View>
        ) : null}

        <TouchableOpacity  style={{
              // width: 129,
              
              // justifyContent: 'center',
              // alignItems: 'center',
              // borderBottomWidth: 0.5,
              // borderBottomColor: 'white',
              // left:'65%'

            }}>
          <Text
            style={{
              color: 'white',
              marginTop: 20,
              marginRight: 8,
              textAlign: 'center',
              fontSize: 16,
              // fontFamily: 'SemiBold',
              alignSelf:'flex-end',
              borderBottomWidth: 0.5,
              borderBottomColor: 'white',
              fontWeight:'100',
              fontFamily:'SemiLight'
            }}>
            Forgot password
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity onPress={()=>navigation.navigate(Sign_Up)} style={styles.signIn}>
            <LinearGradient
              colors={['#FFEA28', '#FFEA28']}
              start={{x: 0.0, y: 0.25}}
              end={{x: 1.0, y: 0.25}}
              style={{ paddingLeft: 20,
                paddingRight: 20,
                alignSelf: 'center',
                width: '100%',
                height: 60,
            
                borderRadius: 30,
                paddingTop:5,}}>
              <Text style={ {fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color:'#C708B4'
    }}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View
          style={{
            // flexDirection: 'row',
            marginTop: 40,
            // justifyContent: 'space-between',
          }}>
          {/* <View
            style={{
              width: '45%',
              height: 2,
              backgroundColor: 'white',
              alignSelf: 'center',
            }}></View> */}
          <Text style={{color: 'white', fontSize: 16, alignSelf: 'center' , fontWeight:'bold'}}>
            OR
          </Text>
          {/* <View
            style={{
              width: '45%',
              height: 2,
              backgroundColor: 'white',
              alignSelf: 'center',
            }}></View> */}
        </View>

        <View style={{alignItems: 'center',
    marginTop: 10,}}>
          <TouchableOpacity style={styles.signIn1}>
            <LinearGradient
              colors={['#395185', '#395185']}
              start={{x: 0.0, y: 0.25}}
              end={{x: 1.0, y: 0.25}}
              style={{paddingLeft: 20,
                paddingRight: 20,
                alignSelf: 'center',
                width: '100%',
                height: 30,
            
                borderRadius: 30,}}>
              <Text
                style={{fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  
                  color: 'white',
                  alignSelf:'center',
                  paddingLeft:24,
                  paddingTop:5}}>
                Continue with facebook
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center',
    marginTop:5,}}>
          <TouchableOpacity style={styles.signIn1}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              start={{x: 0.0, y: 0.25}}
              end={{x: 1.0, y: 0.25}}
              style={{paddingLeft: 20,
                paddingRight: 20,
                alignSelf: 'center',
                width: '100%',
                height: 30,
            
                borderRadius: 30,}}>
              <Text style={{fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    
    color: 'black',
    paddingTop:5}}>Continue with gmail</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center',
    marginTop: 5,}}>
          <TouchableOpacity style={styles.signIn1}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              start={{x: 0.0, y: 0.25}}
              end={{x: 1.0, y: 0.25}}
              style={{paddingLeft: 20,
                paddingRight: 20,
                alignSelf: 'center',
                width: '100%',
                height: 30,
            
                borderRadius: 30,}}>
              <Text style={{fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    
    color: 'black',
    paddingTop:5}}>Continue with apple</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20 , alignItems:'center'}}>
          <TouchableOpacity
            onPress={()=>navigation.navigate(Signup)}
            >
            <Text style={{color: 'white', fontSize: 20, alignSelf: 'center' , borderBottomWidth:0.5 , borderBottomColor: 'white' , fontFamily:'B612-Regular'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  header: {
    flex: 2,
    justifyContent: 'flex-end',
    borderBottomEndRadius: 180,
    backgroundColor: '#121212',
    paddingBottom: 40,
    paddingLeft: 20,
  },
  footer: {
    flex: 2,
    borderColor: '#B88746',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 50,
    width: '100%',
    height: 60,

    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  action1: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    height: 60,

    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    fontSize:16,
    fontFamily:'SemiBold'
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
  },
  button1: {
    alignItems: 'center',
    marginTop: 20,
  },
  signIn: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  signIn1: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  signbutton: {
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'center',
    width: '100%',
    height: 30,

    borderRadius: 30,
  },
  signbtntext: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  signbtn1: {
    paddingLeft: 34,
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'auto',

    height: '80%',
    width: '80%',
    borderRadius: 720,
  },
  errorLabelContainerStyle: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
  },
});
