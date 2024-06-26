import {StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';
import color from '../constants/color';
// import FONT_FAMILY from '../../constants/fonts';
import scale from '../constants/responsive';

const UnderLine = props => {
  const {onPress, style, textStyle, text, name, chosen, lineColor} = props;
  isChoosing = name === chosen;
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: scale(15),
      }}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <View
        style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={[
              {
                height: 1,
                borderBottomWidth: 0.3,
                marginTop: scale(4),
                borderColor: isChoosing ? color.Black : color.white,
              },
              lineColor,
            ]}
          />
        </View>
        {isChoosing ? (
          <Text
            style={[styles.background(isChoosing), style, {letterSpacing: -3}]}>
            ◆
          </Text>
        ) : (
          <Text
            style={[
              styles.background(isChoosing),
              style,
              {letterSpacing: -3},
            ]}></Text>
        )}

        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={[
              {
                height: 1,
                borderBottomWidth: 0.3,
                marginTop: scale(4),
                borderColor: isChoosing ? color.Black : color.white,
              },
              lineColor,
            ]}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default UnderLine;

const styles = StyleSheet.create({
  background: isChoosing => ({
    alignSelf: 'center',
    color: isChoosing ? color.Black : color.white,
    letterSpacing: -0.5,
  }),
  text: {
    color: color.Black,
    paddingHorizontal: scale(26),
    fontWeight: '400',
    fontSize: scale(15),
    alignSelf: 'center',

    // fontFamily: FONT_FAMILY.Bold,
  },
});
