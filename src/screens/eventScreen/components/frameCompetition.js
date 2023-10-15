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
import {IMG_Image1, IMG_JennieKim, IMG_View} from '../../../assets/images';
import {
  IC_Address,
  IC_Clock,
  IC_Comment,
  IC_Favorite,
  IC_FavoriteRed,
  IC_Saved,
  IC_Saved2,
  IC_SavedYellow,
} from '../../../assets/icons';

const FrameCompetition = props => {
  const [isFavor, setIsFavor] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <ImageBackground
        source={props.image}
        borderRadius={15}
        resizeMode="cover"
        style={{
          width: 350,
          height: 159,
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
        <View style={styles.view}>
          <Image source={IMG_View} />
        </View>

        <View style={styles.content}>
          <Text style={styles.eventName}>{props.eventName}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: scale(15),
              alignItems: 'center',
            }}>
            <IC_Clock style={{marginLeft: scale(20)}} />
            <Text style={styles.smallText}>{props.date}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default FrameCompetition;

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
    borderRadius: 20,
  },
  view: {
    marginTop: scale(20),
    marginLeft: scale(15),
  },

  content: {
    marginTop: scale(40),
    marginLeft: scale(15),
  },

  eventName: {
    fontSize: 14,
    width: '70%',
  },
  smallText: {
    fontSize: 8,
    marginLeft: scale(5),
  },
});
