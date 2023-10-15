import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import color from '../../../constants/color';
import scale from '../../../constants/responsive';

const Comment = props => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        marginRight: scale(80),
        marginTop: scale(20),
        width: '80%',
        marginLeft: scale(20),
      }}>
      <Image source={props.image} />
      <View
        style={{
          flexDirection: 'column',
          marginLeft: scale(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
          }}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.hour}>{props.hour}</Text>
        </View>
        <Text style={styles.comment}>{props.comment}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Comment;

const styles = StyleSheet.create({
  name: {
    fontSize: 12,
    fontWeight: '500',
    color: color.Black,
  },
  hour: {
    color: '#6E6E6E',
    fontSize: 7,
    marginLeft: scale(10),
  },

  comment: {
    fontSize: 10,
    color: '#B6B6B6',
  },
});
