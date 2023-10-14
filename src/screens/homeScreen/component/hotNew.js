import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import color from '../../../constants/color';
import {
  IMG_HotNew1,
  IMG_HotNew2,
  IMG_HotNew3,
  IMG_HotNew4,
} from '../../../assets/images';
import scale from '../../../constants/responsive';
import SwiperFlatList from 'react-native-swiper-flatlist';
import LinearGradient from 'react-native-linear-gradient';

const HotNew = () => {
  const hotNew = [IMG_HotNew1, IMG_HotNew2, IMG_HotNew3, IMG_HotNew4];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerContainer}>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          showPagination
          paginationStyle={styles.wrapDot}
          paginationStyleItemActive={styles.dotActive}
          paginationStyleItemInactive={styles.dot}
          data={hotNew}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{width: Dimensions.get('window').width}}
              //   key={item => `${item._id}`}
              //   onPress={() =>
              //     props.navigation.navigate('CollectionStackScreen', {
              //       screen: 'CollectionDetailScreen',
              //       params: {data: item},
              //     })
              //   }
            >
              <Image
                source={item}
                style={styles.bannerWrap}
                resizeMode="cover"></Image>
            </TouchableOpacity>
          )}
        />
        <View style={styles.text}>
          <LinearGradient
            style={styles.textContainer}
            colors={[
              'rgba(1,1 ,1 , 0.2)',
              'rgba(1,1 ,1 , 0.3)',
              'rgba(1,1 ,1 , 0.4)',
              'rgba(1, 1, 1, 0.5)',
            ]}>
            <Text style={styles.prodName}>
              2021 STYLE GUIDE: THE BIGGEST FALL PAINT
            </Text>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HotNew;

const styles = StyleSheet.create({
  container: {
    height: scale(193),
    width: scale(350),
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: color.Black,
  },
  textContainer: {
    position: 'absolute',
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    bottom: scale(0),
    marginLeft: scale(14),
    width: scale(350),
    height: scale(193),
    justifyContent: 'flex-end',
  },
  text: {
    width: '100%',
  },
  prodName: {
    width: scale(311),
    fontWeight: 'normal',
    textAlign: 'justify',
    top: scale(13),
    fontSize: scale(16),
    lineHeight: scale(26),
    letterSpacing: scale(2),
    textTransform: 'uppercase',
    color: color.white,
    marginBottom: scale(40),
  },

  wrapDot: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
  },
  dotActive: {
    margin: scale(1),
    backgroundColor: color.RoyalOrange,
    width: scale(14),
    height: scale(3),
    borderRadius: 10,
  },
  dot: {
    margin: scale(1),
    backgroundColor: color.Grullo,
    size: 3,
    width: scale(3),
    height: scale(3),
  },
});
