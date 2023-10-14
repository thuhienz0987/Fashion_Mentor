import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import scale from '../constants/responsive';
import {SafeAreaView} from 'react-native-safe-area-context';

const ColorCircle = props => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: props.width,
          height: props.width,
          backgroundColor: props.color,
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: scale(30),
        }}></View>
    </SafeAreaView>
  );
};

export default ColorCircle;
