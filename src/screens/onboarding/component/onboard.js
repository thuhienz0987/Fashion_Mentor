import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import color from '../../../constants/color';
import {IMG_On1, IMG_On2, IMG_On3} from '../../../assets/images';
import scale from '../../../constants/responsive';
import SwiperFlatList from 'react-native-swiper-flatlist';

const {width: screenWidth} = Dimensions.get('window');

const HotNew = () => {
  const views = [
    {
      source: IMG_On1,
      text: 'Connect fashion \nenthusiasts.',
      subText:
        'Rating others outfits and finding people who have the same style.',
      id: 0,
    },
    {
      source: IMG_On2,
      text: 'Discover yourself and \nShow your style',
      subText: 'Understand your measurements and learn how to mix and match.',
      id: 1,
    },
    {
      source: IMG_On3,
      text: 'Trending \nnow',
      subText: 'See what styles are trending now and definition of them.',
      id: 2,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.swiper}>
        <SwiperFlatList
          showPagination
          paginationStyle={styles.wrapDot}
          paginationStyleItemActive={styles.dotActive}
          paginationStyleItemInactive={styles.dot}
          data={views}
          renderItem={({item}) => (
            <View key={item.id} style={{width: screenWidth, height: '110%'}}>
              <ImageBackground source={item.source} style={styles.image}>
                <Text style={styles.text}>{item.text}</Text>
                <Text style={styles.subText}>{item.subText}</Text>
                <TouchableOpacity style={styles.skip}>
                  <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HotNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#EDD1FF",
  },
  swiper: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    height: scale(100),
    marginTop: scale(550),
    fontSize: scale(28),
    fontWeight: '700',
    marginLeft: scale(10),
    color: color.Black,
    justifyContent: 'center',
    //fontFamily: FONT_FAMILY.NexaBold,
    //color: "#000000",
  },
  subText: {
    height: scale(100),
    width: scale(350),
    marginTop: scale(-20),
    fontSize: scale(14),
    fontWeight: '400',
    marginLeft: scale(10),
    color: color.GraySolid,
    justifyContent: 'center',
    //fontFamily: FONT_FAMILY.NexaBold,
    //color: "#000000",
  },
  wrapDot: {
    width: '20%',
    top: '64%',
    left: '40%',
  },
  dotActive: {
    margin: scale(1),
    backgroundColor: color.Black,
    width: scale(14),
    height: scale(3),
    borderRadius: 10,
  },
  dot: {
    margin: scale(1),
    backgroundColor: color.GraySolid,
    size: 3,
    width: scale(3),
    height: scale(3),
  },
  skip: {
    backgroundColor: color.RedSolid,
  },
  skipText: {
    fontWeight: '400',
    position: 'absolute',
    bottom: scale(20),
    right: scale(20),
    fontSize: scale(14),
    // alignSelf: 'center',
    color: color.Black,
    //fontFamily: FONT_FAMILY.NexaRegular,
    //color: CUSTOM_COLOR.White,
  },
});
