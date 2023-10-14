import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import color from '../../../constants/color';
import scale from '../../../constants/responsive';
import LinearGradient from 'react-native-linear-gradient';
import {IMG_JennieKim} from '../../../assets/images';
import {
  IC_Comment,
  IC_Favorite,
  IC_FavoriteRed,
  IC_Saved,
  IC_Saved2,
  IC_SavedYellow,
} from '../../../assets/icons';

const FrameExplore = props => {
  const [isFavor, setIsFavor] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={props.image}
        borderRadius={15}
        resizeMode="cover"
        style={{
          width: 350,
          height: 256,
          overflow: 'hidden',
        }}>
        <LinearGradient
          style={styles.textContainer}
          colors={[
            'rgba(1,1 ,1 , 0.1)',
            'rgba(1,1 ,1 , 0.2)',
            'rgba(1,1 ,1 , 0.3)',
            'rgba(1, 1, 1, 0.4)',
          ]}></LinearGradient>
        <View style={styles.body}>
          <View style={styles.viewTitle}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.avaContainer}>
                <Image source={IMG_JennieKim} />
              </View>
              <Text style={styles.textTitle}>{props.titleText}</Text>
            </View>
            <Text style={styles.textNormal}>{props.bodyText}</Text>
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <TouchableOpacity onPress={() => setIsFavor(!isFavor)}>
              {isFavor ? <IC_Favorite /> : <IC_FavoriteRed />}
            </TouchableOpacity>
            <Text>{props.favNum}</Text>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity onPress={() => setIsSaved(!isSaved)}>
              {isSaved ? <IC_SavedYellow /> : <IC_Saved2 />}
            </TouchableOpacity>
            <Text>{props.savedNum}</Text>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity onPress={props.onPress}>
              <IC_Comment />
            </TouchableOpacity>
            <Text>{props.commentNum}</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default FrameExplore;

const styles = StyleSheet.create({
  container: {
    marginTop: scale(20),
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '80%',
    margin: scale(20),
    marginTop: scale(170),
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
    borderRadius: 38,
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
    marginLeft: scale(10),
  },

  textNormal: {
    color: color.white,
    fontWeight: 'normal',
    fontSize: 11,
    marginTop: scale(10),
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
  avaContainer: {
    width: scale(35),
    height: scale(35),
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    height: scale(180),
    width: scale(50),
    position: 'absolute',
    right: scale(10),
    top: scale(20),
    justifyContent: 'space-between',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
