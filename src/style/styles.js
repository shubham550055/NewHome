import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    backgroundVideo: {
        alignItems: "stretch",
        position: "absolute",
        height: Dimensions.get("window").height,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    }
});

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: red;
`;

export const NewsByFollowing = styled.View`
    position: absolute;
    left: 10%;
    right: 10%;
    top: 5%;
    z-index: 99;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NewsByFollowingText = styled.Text`
    color: #FFF;
`;

export const NewsByFollowingTextBold = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: #FFF;
`;

export const ContentRight = styled.View`
    position: absolute;
    padding: 10px;
    right: 5px;
    top: 50%;
    bottom: 20%;
    z-index: 99;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentRight1 = styled.View`
    position: absolute;
    padding: 10px;
    right: 3px;
    
    top: 3%;
    z-index: 99;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentRight2 = styled.View`
    position: absolute;
    padding: 10px;
    right: 5px;
    
    top: 80%;
    bottom : 10%;
    z-index: 99;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentRightUser = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 25px;
    
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #555;
`;

export const ContentRightUserImage = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 25px;
`;

export const ContentRightUserPlus = styled.View`
margin-top: 10px;
margin-bottom: 10px;
flex: 1;
display: flex;
align-items: center;
justify-content: center;
    
`;

export const ContentRightHeart = styled.TouchableOpacity`
    margin-top: 10px;
    
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentRightComment = styled.TouchableOpacity`
    margin-top: 10px;
    
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentRightWhatsApp = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentRightWhatsAppImage = styled.Image`
   width: 30px;
   height: 30px;
   border-radius: 48px;
   border-width: 2px;
  
`;

export const ContentRightText = styled.Text`
    margin-top: 10px;
    font-weight: bold;
    color: #FFF;
`;

export const ContentLeftBottom = styled.View`
    position: absolute;
    padding: 10px;
    left: 5px;
    bottom: 8%;
    z-index: 99;
    width: 75%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const ContentLeftTop = styled.View`
    position: absolute;
    padding: 10px;
    left: 5px;
    top: 3%;
    z-index: 99;
    width: 75%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const ContentLeftBottomNameUser = styled.TouchableOpacity`
`;
export const ContentLeftBottomNameUserText = styled.Text`
    margin-left :10px;
    
    color: #FFF;
    font-size : 20px;
    font-weight: bold;
`;

export const ContentLeftBottomNameUser1 = styled.TouchableOpacity`
   margin-left : 10px;
   align-items :center;
    border-radius: 20px;
    border-width: 2px;
    background-color : red;
    width: 100px;
    height:30px;
    
`;
export const ContentLeftBottomNameUserText1 = styled.Text`
    
    
    color: #FFF;
    font-size : 18px;
    
   
    
`;

export const ContentLeftBottomDescription = styled.Text`
    
    
    color: #FFF;
`;

export const ContentLeftBottomMusic = styled.Text`
    
    margin-left : 10px;
    color: #FFF;
    overflow: scroll;
    
`;

export const ContentLeftRow = styled.View`
    margin-top: 10px;
    flex-direction : row ;
    align-items: center;
`;