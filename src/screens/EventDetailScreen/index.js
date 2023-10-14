import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import color from '../../constants/color';
import {
  IMG_AvaComment,
  IMG_EventDetailedImage1,
  IMG_Map,
  IMG_View,
} from '../../assets/images';
import {
  IC_Address2,
  IC_Car,
  IC_EventDetailAddress,
  IC_EventDetailDate,
  IC_Tick,
  IC_Back,
} from '../../assets/icons';
import scale from '../../constants/responsive';
import {useNavigation} from '@react-navigation/native';

const EventDetailScreen = () => {
  const [isConcern, setIsConcern] = useState('false');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <Image source={IMG_EventDetailedImage1} rezizeMode="contain" />
      </View>

      <TouchableOpacity
        style={{
          position: 'absolute',
          marginTop: scale(30),
          marginLeft: scale(20),
        }}>
        <IC_Back />
      </TouchableOpacity>

      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: scale(100),
            marginLeft: scale(20),
          }}>
          <IC_EventDetailDate />
          <View
            style={{
              marginLeft: scale(10),
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text style={styles.text1}>Sat, May 25, 2023</Text>
            <Text style={styles.text2}>14:00 - 17:00 PM</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: scale(15),
            marginLeft: scale(20),
          }}>
          <IC_EventDetailAddress />
          <View
            style={{
              marginLeft: scale(10),
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text style={styles.text1}>Central Park</Text>
            <Text style={styles.text2}>Dong Hoa, Di An</Text>
          </View>
        </View>

        <View>
          <Text style={styles.title}>About</Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.aboutDetail}>
            In the heart of the bustling city, amidst the cacophony of honking
            horns and hurried footsteps, there lies a quaint little cafe that
            feels like a sanctuary of calm. The aroma of freshly brewed coffee
            mingles with the scent of freshly baked pastries, creating an
            inviting ambiance that draws people in from the busy streets.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: scale(40),
            marginLeft: scale(20),
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image source={IMG_View} />
          <Text style={{marginLeft: scale(20), fontSize: scale(10)}}>
            (79 Going)
          </Text>
        </View>
        {isConcern === 'false' ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsConcern(true)}>
            <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
              Concern now
            </Text>
          </TouchableOpacity>
        ) : (
          <IC_Tick style={styles.tickIcon} />
        )}
      </View>

      <View style={styles.box}>
        <View>
          <Text style={styles.eventName}>HANG UP HELP OUT 2022</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: scale(10),
            }}>
            <IC_Address2 />
            <Text style={styles.text}>Dong Hoa, Di An</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <IC_Car />
            <Text style={styles.text}>Distance 7,2 km</Text>
          </View>
        </View>
        <Image style={{marginLeft: scale(40)}} source={IMG_Map} />
      </View>
    </SafeAreaView>
  );
};

export default EventDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  image: {
    width: '100%',
    height: '42%',
    backgroundColor: 'pink',
  },
  text1: {
    fontSize: 9,
    fontWeight: '400',
    color: color.Black,
  },

  text2: {
    fontSize: 6,
    fontColor: '#B6B6B6',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    color: color.Black,
    marginTop: scale(20),
    marginLeft: scale(20),
    fontWeight: 'bold',
  },
  aboutDetail: {
    width: '90%',
    fontSize: 11,
    marginTop: scale(20),
    color: '#B6B6B6',
  },
  button: {
    width: '50%',
    height: scale(50),
    backgroundColor: '#292526',
    borderRadius: scale(10),
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 40,
    marginTop: scale(40),
  },
  box: {
    width: '90%',
    height: scale(100),
    position: 'absolute',
    backgroundColor: color.white,
    marginTop: scale(300),
    alignSelf: 'center',
    borderRadius: scale(15),
    paddingLeft: scale(20),
    paddingTop: scale(10),
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  eventName: {
    fontSize: 15,
    color: color.Black,
  },
  text: {
    fontSize: 9,
    color: '#B6B6B6',
    marginLeft: scale(8),
  },
  tickIcon: {
    width: '50%',
    height: scale(50),
    backgroundColor: 'transparent',
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: scale(40),
  },
});
