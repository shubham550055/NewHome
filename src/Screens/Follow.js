import React from 'react';
import {
  View,
  ScrollView,

  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import MainTab from '../Screens/MainTab'
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import AllUserProfileScreen from '../Screens/AllUserProfileScreen';


const Follow = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          
          width: '100%',
          height: '7%',
          backgroundColor: 'white',
          borderBottomWidth:0.5,
        }}>
        <Text
          style={{
            color: 'black',
            alignSelf: 'center',
            fontSize: 24,
            top: '25%',
            fontWeight:'bold'
          }}>
          Discover
        </Text>
       
      </View>
      {/* <View style={{flex:1 , backgroundColor:'red', width:'100%'}}>
        <Text style={{color:'black' , fontSize:20, }}>
          People You May be Interested In
        </Text>
      </View> */}
      <ScrollView style={{backgroundColor:'white'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            
          }}>
          <View style={{left: '7%'}} >
            <TouchableOpacity onPress={() =>navigation.navigate(AllUserProfileScreen)} >
            <Image
              
              source={require('../Assets/girls.jpg')}
              
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                marginTop: 20,
                borderRadius: 48,
                alignSelf: 'center',
              }}
            />
           
            
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 1,
                color:'#000000'
              }}
              >
              Bhavesh
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
               
              style={{
                width: 100,
                height: 25,
                borderRadius: 10,
                
                backgroundColor: '#FFEA28',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold' , color:'#395185'}}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>

          <View  style={{top:30,}}>
            <Image
              source={require('../Assets/girls.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                marginTop: 20,
                borderRadius: 48,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 1,
                color:'#000000'
              }}>
              Bhavesh
            </Text>
            <TouchableOpacity
              style={{
                width: 100,
                height: 25,
                borderRadius: 10,
               
                backgroundColor: '#FFEA28',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold' , color:'#395185'}}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{right: '7%'}}>
            <Image
              source={require('../Assets/girls.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                marginTop: 20,
                borderRadius: 48,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 1,
                color:'#000000'
              }}>
              Bhavesh
            </Text>
            <TouchableOpacity
              style={{
                width: 100,
                height: 25,
                borderRadius: 10,
               
                backgroundColor: '#FFEA28',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color:'#395185'}}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <View style={{left: '7%'}}>
            <Image
              source={require('../Assets/girls.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                marginTop: 20,
                borderRadius: 48,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 1,
                color:'#000000'
              }}>
              Bhavesh
            </Text>
            <TouchableOpacity
              style={{
                width: 100,
                height: 25,
                borderRadius: 10,
                
                backgroundColor: '#FFEA28',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color:'#395185'}}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>

          <View  style={{top:30,}}>
            <Image
              source={require('../Assets/girls.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                marginTop: 20,
                borderRadius: 48,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 1,
                color:'#000000'
              }}>
              Bhavesh
            </Text>
            <TouchableOpacity
              style={{
                width: 100,
                height: 25,
                borderRadius: 10,
                
                backgroundColor: '#FFEA28',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color:'#395185'}}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{right: '7%'}}>
            <Image
              source={require('../Assets/girls.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                marginTop: 20,
                borderRadius: 48,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 1,
                color:'#000000'
              }}>
              Bhavesh
            </Text>
            <TouchableOpacity
              style={{
                width: 100,
                height: 25,
                borderRadius: 10,
               
                backgroundColor: '#FFEA28',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color:'#395185'}}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>


        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <View style={{left: '7%'}}>
            <Image
              source={require('../Assets/girls.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                marginTop: 20,
                borderRadius: 48,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 1,
                color:'#000000'
              }}>
              Bhavesh
            </Text>
            <TouchableOpacity
              style={{
                width: 100,
                height: 25,
                borderRadius: 10,
                
                backgroundColor: '#FFEA28',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color:'#395185'}}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>

          <View  style={{top:30,}}>
            <Image
              source={require('../Assets/girls.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                marginTop: 20,
                borderRadius: 48,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 1,
                color:'#000000'
              }}>
              Bhavesh
            </Text>
            <TouchableOpacity
              style={{
                width: 100,
                height: 25,
                borderRadius: 10,
               
                backgroundColor: '#FFEA28',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color:'#395185'}}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{right: '7%'}}>
            <Image
              source={require('../Assets/girls.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                marginTop: 20,
                borderRadius: 48,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 1,
                color:'#000000'
              }}>
              Bhavesh
            </Text>
            <TouchableOpacity
              style={{
                width: 100,
                height: 25,
                borderRadius: 10,
                
                backgroundColor: '#FFEA28',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color:'#395185'}}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <View style={{left: '7%'}}>
            <Image
              source={require('../Assets/girls.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                marginTop: 20,
                borderRadius: 48,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 1,
                color:'#000000'
              }}>
              Bhavesh
            </Text>
            <TouchableOpacity
              style={{
                width: 100,
                height: 25,
                borderRadius: 10,
                
                backgroundColor: '#FFEA28',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color:'#395185'}}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>

          <View  style={{top:30,}}>
            <Image
              source={require('../Assets/girls.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                marginTop: 20,
                borderRadius: 48,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 1,
                color:'#000000'
              }}>
              Bhavesh
            </Text>
            <TouchableOpacity
              style={{
                width: 100,
                height: 25,
                borderRadius: 10,
                
                backgroundColor: '#FFEA28',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color:'#395185'}}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{right: '7%'}}>
            <Image
              source={require('../Assets/girls.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                marginTop: 20,
                borderRadius: 48,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 1,
                color:'#000000'
              }}>
              Bhavesh
            </Text>
            <TouchableOpacity
              style={{
                width: 100,
                height: 25,
                borderRadius: 10,
               
                backgroundColor: '#FFEA28',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color:'#395185'}}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>


      </ScrollView>

     <TouchableWithoutFeedback  onPress = {() => navigation.navigate(MainTab)}>
     <View
        style={{
          
          width: '100%',
          height: '7%',
          backgroundColor: 'white',
        }}>
        
        <Text style={{color:'black' , alignSelf:'center',fontSize:16 , marginTop:12 , fontWeight:'bold'}}>Skip</Text>
      </View>
       
     </TouchableWithoutFeedback>

     </View>
      
  );
};

export default Follow;
