import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {IMG_HotNew1, IMG_HotNew2, IMG_HotNew3} from '../assets/images';
import scale from '../constants/responsive';
import color from '../constants/color';
import LinearGradient from 'react-native-linear-gradient';

const FramePicture = props => {
  const {width, height} = props;

  return (
    <SafeAreaView
      style={{
        width: width,
        height: height,
      }}>
      <ImageBackground
        source={props.image}
        borderRadius={15}
        resizeMode="cover"
        style={{
          width: width,
          height: height,
          overflow: 'hidden',
        }}>
        <LinearGradient
          style={styles.textContainer}
          colors={[
            'rgba(1,1 ,1 , 0.4)',
            'rgba(1,1 ,1 , 0.5)',
            'rgba(1,1 ,1 , 0.6)',
            'rgba(1, 1, 1, 0.7)',
          ]}>
          {/* <Text style={styles.prodName}>
              2021 STYLE GUIDE: THE BIGGEST FALL PAINT
            </Text> */}
        </LinearGradient>
        <View style={styles.body}>
          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>{props.titleText}</Text>
            <Text style={styles.textNormal}>{props.bodyText}</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Read more</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default FramePicture;

const styles = StyleSheet.create({
  container: {},
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '80%',
    margin: scale(20),
  },
  textContainer: {
    position: 'absolute',
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    bottom: scale(0),
    marginLeft: scale(14),
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    borderRadius: 15,
  },
  viewTitle: {
    width: '100%',
    top: 0,
    position: 'absolute',
  },
  textTitle: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: 20,
  },

  textNormal: {
    color: color.white,
    fontWeight: 'normal',
    fontSize: 11,
  },
  button: {
    backgroundColor: color.white,
    width: scale(87),
    height: scale(28),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  textButton: {
    color: color.Black,
    fontWeight: 'bold',
    fontSize: 10,
  },
});
