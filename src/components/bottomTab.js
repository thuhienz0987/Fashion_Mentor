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

const BottomTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <IC_Home />
      </TouchableOpacity>
      <TouchableOpacity>
        <IC_Explore />
      </TouchableOpacity>
      <TouchableOpacity>
        <IC_Scan />
      </TouchableOpacity>
      <TouchableOpacity>
        <IC_Event />
      </TouchableOpacity>
      <TouchableOpacity>
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
