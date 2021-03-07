import React, { Component ,useState} from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text,Modal, StatusBar, TextInput, TouchableOpacity, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import { Container, Content, Icon, Header, Left, Body, Right, Segment, Button } from 'native-base'

var images = [
  require('../Assets/image1.png'),
  require('../Assets/image2.png'),
  require('../Assets/image3.png'),
  require('../Assets/image4.png'),
  require('../Assets/image5.png'),
  require('../Assets/image6.png'),
  require('../Assets/image7.png'),
  require('../Assets/image8.png'),
  require('../Assets/image8.png'),
  require('../Assets/image1.png'),
  require('../Assets/image2.png'),
  require('../Assets/image3.png'),
 
]

var images1 = [
  require('../Assets/image3.png'),
  require('../Assets/image4.png'),
  require('../Assets/image5.png'),
  require('../Assets/image6.png'),
  require('../Assets/image7.png'),
  require('../Assets/image8.png'),
  require('../Assets/image8.png'),
]

var images2 = [
  require('../Assets/image1.png'),
  require('../Assets/image9.png'),
  require('../Assets/image3.png'),
  require('../Assets/image6.png'),
  require('../Assets/image1.png'),
  require('../Assets/image4.png'),
  require('../Assets/image7.png'),
]

export default class Main1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
        activeIndex: 0
    }
}

segmentClicked(index) {
  this.setState({
      activeIndex: index
  })
}

renderSectionOne() {
  {
    if(this.state.activeIndex==0){
      
      return images.map((image, index) => {
        return (
         
            <View key={index} style={[{ width: (width) / 3 }, { height:250 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                <Image style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    width:undefined,
                    height:undefined
                    
                    
  
                }}
                    source={image}>
                     
                </Image>
                <View style={{display:"flex",flexDirection:"row"}}>
                <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{position: 'absolute',bottom:8,color:"white",height:width/130*8,width:width/130*8,borderRadius:20,left:5}}/>
                <Text style={{position: 'absolute', fontSize: 13,bottom:8,color:"white",paddingLeft:5,left:28,fontWeight:"bold"}}>Ajay_Wikipediaas</Text>
                </View>
            </View>
           
        )
    })
1
    }
  }

  {
    if(this.state.activeIndex==1){
      return images1.map((image, index) => {
        return (
            <View key={index}  style={[{ width: (width) / 3 }, { height:250 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                <Image style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    width: undefined,
                    height: undefined,
  
                }}
                    source={image}>
                </Image>
                <View style={{display:"flex",flexDirection:"row"}}>
                <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{position: 'absolute', fontSize: 20,bottom:8,color:"white",height:width/100*8,width:width/100*8,borderRadius:20,left:5}}/>
                <Text style={{position: 'absolute', fontSize: 13,bottom:8,color:"white",paddingLeft:5,left:28,fontWeight:"bold"}}>Ajay_Wikipediaas</Text>
                </View>
  
            </View>
        )
    })

    }
  }


  {
    if(this.state.activeIndex==2){
      return images2.map((image, index) => {
        return (
            <View key={index}  style={[{ width: (width) / 3 }, { height:250 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                <Image style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    width: undefined,
                    height: undefined,
  
                }}
                    source={image}>
                </Image>
                <View style={{display:"flex",flexDirection:"row"}}>
                <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{position: 'absolute', fontSize: 20,bottom:8,color:"white",height:width/100*8,width:width/100*8,borderRadius:20,left:5}}/>
                <Text style={{position: 'absolute', fontSize: 13,bottom:8,color:"white",paddingLeft:5,left:28,fontWeight:"bold"}}>Ajay_Wikipediaas</Text>
                </View>
  
            </View>
        )
    })

    }
  }

 



}

renderSection = () => {
  if(this.state.activeIndex==0) {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
         {this.renderSectionOne()}
      </View>
    )
  }

  if(this.state.activeIndex==1) {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {this.renderSectionOne()}
      </View>
    )
  }

  if(this.state.activeIndex==2) {
    return (
      <View  style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {this.renderSectionOne()}
      </View>
    )
  }


}

  render() {
    return (
      <View>
        <View style={{ flex: 1 }}>
               
      </View>
      <View  style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopColor: '#eae5e5'}}>
        <Button 
         onPress={() => this.segmentClicked(0)}
         active={this.state.activeIndex == 0}
        transparent>
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{height:width/100*7,width:width/100*7 }}>
        
        </Image>
              
        </Button>
        

        <Button 
         onPress={() => this.segmentClicked(1)}
         active={this.state.activeIndex == 1}
        transparent>
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{height:width/100*7,width:width/100*7 }}>

        </Image>
              
        </Button>

        <Button 
         onPress={() => this.segmentClicked(2)}
         active={this.state.activeIndex == 2}
        transparent>
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{height:width/100*7,width:width/100*7 }}>

        </Image>
              
        </Button>

        
        <Button 
         onPress={() => this.segmentClicked(2)}
         active={this.state.activeIndex == 2}
        transparent>
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{height:width/100*7,width:width/100*7 }}>

        </Image>
              
        </Button>

     

        

      

        
       

        


      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent: 'space-around',marginTop:-5}}>
      <Text style={{fontWeight:"bold"}}>Shopim11</Text>
      <Text  style={{fontWeight:"bold"}}>Shopim22</Text>
      <Text  style={{fontWeight:"bold"}}>Shopim33</Text>
      <Text  style={{fontWeight:"bold"}}>Shopim44</Text>
     
     
      </View>
     
      {this.renderSection()}
      </View>
    )
  }
}