import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {IC_Back, IC_Scan, IC_SeeMore} from '../../assets/icons';
import scale from '../../constants/responsive';
import color from '../../constants/color';
import {IMG_OutFit2} from '../../assets/images';

const PersonalColorScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <IC_Back></IC_Back>
        </TouchableOpacity>
        <Text style={styles.textTitle}>Autumn type</Text>
        <TouchableOpacity>
          <IC_SeeMore></IC_SeeMore>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.viewDescription}>
          <Text style={styles.textDescription}>
            You are a True Autumn if the primary colour aspect of your overall
            appearance is warm, and the secondary aspect is muted. Your skin,
            hair and eyes all have rich, golden undertones.
          </Text>
        </View>

        <View style={styles.viewSize}>
          <Text style={styles.textHead}>Your own colors</Text>
          <View style={styles.list}>
            <View
              style={[styles.itemList, {backgroundColor: '#CDB354'}]}></View>
            <View
              style={[styles.itemList, {backgroundColor: '#C0B7A6'}]}></View>
            <View
              style={[styles.itemList, {backgroundColor: '#238588'}]}></View>
            <View
              style={[styles.itemList, {backgroundColor: '#024143'}]}></View>
            <View
              style={[styles.itemList, {backgroundColor: '#314723'}]}></View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={[styles.itemList, {backgroundColor: '#BE8C76'}]}></View>
          <View style={[styles.itemList, {backgroundColor: '#AE441C'}]}></View>
          <View style={[styles.itemList, {backgroundColor: '#661A1A'}]}></View>
          <View style={[styles.itemList, {backgroundColor: '#2F1E2E'}]}></View>
          <View style={[styles.itemList, {backgroundColor: '#1A3B42'}]}></View>
        </View>

        <View>
          <Text style={styles.textHead}>Recommend outfit</Text>

          <View style={styles.viewDemo}>
            <Image source={IMG_OutFit2} resizeMode="contain"></Image>
          </View>
        </View>

        <View style={styles.viewUpdate}>
          <Text
            style={{textAlign: 'center', color: color.GraySolid, fontSize: 12}}>
            Updated on 13/10/2023 at 13:00 Sent on 13/10/2023 at 13:02
          </Text>
        </View>

        <TouchableOpacity
          style={styles.viewScan}
          onPress={() => props.navigation.navigate('Scan')}>
          <IC_Scan fill={color.GraySolid}></IC_Scan>
          <Text
            style={{color: color.GraySolid, fontSize: 12, fontWeight: 'bold'}}>
            I want to measure myself again
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalColorScreen;

const styles = StyleSheet.create({
  container: {
    padding: scale(20),
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    // height: '',
  },
  textTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: color.Black,
  },
  viewDescription: {
    marginTop: scale(10),
    textAlign: 'justify',
  },
  textDescription: {
    color: color.GraySolid,
    fontSize: 11,
  },
  viewSize: {
    paddingVertical: scale(10),
    width: scale(256),
  },
  textHead: {
    color: color.Black,
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: scale(10),
  },
  list: {
    flexDirection: 'row',
  },
  itemList: {
    marginRight: scale(10),
    width: scale(40),
    height: scale(40),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  textList: {
    color: color.Black,
    fontSize: 14,
  },
  viewDemo: {
    marginLeft: scale(-30),
  },
  viewUpdate: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: scale(30),
    width: scale(245),
  },
  viewScan: {
    marginVertical: scale(10),
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
