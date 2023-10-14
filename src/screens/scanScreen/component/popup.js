import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import color from '../../../constants/color';
import scale from '../../../constants/responsive';
// import { IC_Camera, IC_Image } from '../assets/icons'

const Popup = props => {
  return (
    <View style={styles.viewModal}>
      <TouchableOpacity
        style={styles.viewPopUpLeft}
        onPress={props.onPressUpload}>
        <Text style={styles.textPopUp}>Uploads image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewPopUpRight}
        onPress={props.onPressCamera}>
        <Text style={styles.textPopUp}>Camera</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Popup;

const styles = StyleSheet.create({
  viewModal: {
    width: '100%',
    height: scale(50),
    backgroundColor: color.white,
    marginLeft: 0,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  viewPopUpLeft: {
    height: '100%',
    borderWidth: 1,
    width: '50%',
    borderTopStartRadius: 30,
    borderBottomStartRadius: 30,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: color.Black,
  },
  viewPopUpRight: {
    height: '100%',
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
    borderWidth: 1,
    width: '50%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: color.Black,
  },
  textPopUp: {
    fontSize: 16,
    color: color.Black,
    fontWeight: '700',
    textAlign: 'center',
  },
});
