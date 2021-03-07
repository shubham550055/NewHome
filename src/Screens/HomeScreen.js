import React, {useState} from 'react';
import {View, ScrollView, Dimensions, Text} from 'react-native';

import Video from 'react-native-video';

import Icon from 'react-native-vector-icons/FontAwesome';

import videos from '../Component/data';

import {
  styles,
  ContentRight,
  ContentRightUserPlus,
  ContentRightHeart,
  ContentRightComment,
  ContentRightWhatsAppImage,
  ContentRightText,
  ContentLeftBottom,
  ContentLeftBottomNameUser,
  ContentLeftBottomNameUserText,
  ContentLeftBottomDescription,
  ContentLeftBottomMusic,
  ContentRight2,
  ContentLeftRow,
  ContentLeftBottomNameUserText1,
  ContentLeftBottomNameUser1,
} from '../style/styles';
const HomeScreen = () => {
  const [paused, setPaused] = useState(false);

  return (
    <View style={{flex: 1}}>
      {paused && (
        <Icon
          style={{
            zIndex: 999,
            opacity: 0.8,
            position: 'absolute',
            alignSelf: 'center',
            top: '40%',
            bottom: '40%',
            left: '40%',
            right: '40%',
          }}
          name="play"
          size={100}
          color="#E5E5E5"
        />
      )}

      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        {videos.map((video) => (
          <View
            key={video.id}
            style={{
              flex: 1,
              height: Dimensions.get('window').height,
              backgroundColor: '#010101',
            }}>
            <Video
              style={styles.backgroundVideo}
              source={video.url}
              resizeMode="cover"
              onTouchStart={() => setPaused()}
              paused={paused}
              repeat
              
            />

            <ContentRight>
              <ContentRightUserPlus>
                <Icon name="star" size={28} color="#FFF" />
                <ContentRightText>
                  {video.countLikes > 1000
                    ? `${video.countLikes}K`
                    : video.countLikes}
                </ContentRightText>
              </ContentRightUserPlus>
              <ContentRightHeart>
                <Icon name="comments" size={28} color="#FFF" />
                <ContentRightText>
                  {video.countLikes > 1000
                    ? `${video.countLikes}K`
                    : video.countComments}
                </ContentRightText>
              </ContentRightHeart>
              <ContentRightComment>
                <Icon name="share" size={28} color="#FFF" />
                <ContentRightText>
                  {video.countComments > 1000
                    ? `${video.countComments}K`
                    : video.countWhatsApp}
                </ContentRightText>
              </ContentRightComment>
            </ContentRight>
            <ContentRight2>
              <Icon name="comet" size={28} color="#FFF" />
              <ContentRightText>Duet</ContentRightText>
            </ContentRight2>

            <ContentLeftBottom>
              <ContentLeftRow>
                <ContentRightWhatsAppImage source={video.user.image} />

                <ContentLeftBottomNameUser>
                  <ContentLeftBottomNameUserText numberOfLines={1}>
                    {video.user.name}
                  </ContentLeftBottomNameUserText>
                </ContentLeftBottomNameUser>
                <ContentLeftBottomNameUser1>
                  <ContentLeftBottomNameUserText1 numberOfLines={1}>
                    Follow
                  </ContentLeftBottomNameUserText1>
                </ContentLeftBottomNameUser1>
              </ContentLeftRow>

              <ContentLeftRow>
                <Icon
                  name="hashtag"
                  size={15}
                  color="#FFF"
                  style={{marginLeft: 15}}
                />
                <ContentLeftBottomDescription numberOfLines={3}>
                  {video.description}
                </ContentLeftBottomDescription>
              </ContentLeftRow>
              <ContentLeftRow>
                <Icon name="music" size={15} color="#FFF" />
                <ContentLeftBottomMusic numberOfLines={1}>
                  {video.music}
                </ContentLeftBottomMusic>
              </ContentLeftRow>
            </ContentLeftBottom>
          </View>
        ))}
      </ScrollView>

      {/* header components */}

      <View style={{position: 'absolute', marginLeft: '3%', marginTop: '5%'}}>
        <Icon name="arrow-left" size={25} color="#FFF" />
      </View>

      <View style={{position: 'absolute', marginLeft: '35%', marginTop: '5%'}}>
        <Icon name="bicycle" size={25} color="#FFF" />
      </View>

      <View style={{position: 'absolute', marginLeft: '45%', marginTop: '5%'}}>
        <Icon name="motorcycle" size={25} color="#FFF" />
      </View>
      <View style={{position: 'absolute', marginLeft: '55%', marginTop: '5%'}}>
        <Icon name="car" size={25} color="#FFF" />
      </View>

      <View style={{position: 'absolute', marginLeft: '90%', marginTop: '5%'}}>
        <Icon name="search" size={25} color="#FFF" />
      </View>
    </View>
  );
};

export default HomeScreen;
