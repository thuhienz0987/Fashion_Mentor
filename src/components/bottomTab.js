import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import color from '../constants/color';
import scale from '../constants/responsive';
import {
  IC_Event,
  IC_Explore,
  IC_Home,
  IC_Profile,
  IC_Scan,
} from '../assets/icons';
import {useNavigation} from '@react-navigation/native';

const BottomTab = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate('Home')}>
        <IC_Home />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
        <IC_Explore />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
        <IC_Scan fill={'#F3F3F3'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Event')}>
        <IC_Event />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <IC_Profile />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    width: scale(350),
    height: scale(59),
    backgroundColor: color.Black,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 10,
  },
});
