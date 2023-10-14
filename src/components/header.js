import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import color from '../constants/color';
import scale from '../constants/responsive';
import {IC_Notify} from '../assets/icons';
import {IMG_Logo} from '../assets/images';

const Header = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.text}>{props.text}</Text>
      </View>

      <View style={styles.viewItem}>
        <TouchableOpacity style={styles.viewIcon}>
          <IC_Notify />
        </TouchableOpacity>
        <View style={styles.viewLogo}>
          <Image
            source={IMG_Logo}
            style={styles.image}
            resizeMode="contain"></Image>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(20),
    // flex: 1,
    flexDirection: 'row',
    height: scale(70),
    // backgroundColor: color.GraySolid,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: color.Black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewText: {
    width: '70%',
  },
  viewItem: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewLogo: {
    width: '85%',
    height: '85%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
