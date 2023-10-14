import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import color from '../../constants/color';
import HotNew from './component/onboard';
import scale from '../../constants/responsive';
import { IMG_On1, IMG_On2, IMG_On3 } from '../../assets/images';

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      
        
        <HotNew />

    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  tabBottom: {
    flex: 1,
    position: 'fixed',
  },
  viewCollection: {
    flexDirection: 'row',
    // backgroundColor: color.Black,
    marginHorizontal: scale(20),
    marginTop: scale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.Black,
  },
  textViewAll: {
    fontSize: 11,
    fontWeight: 'normal',
    color: color.GraySolid,
  },
  row: {
    marginVertical: scale(10),
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
  },
  column: {
    justifyContent: 'space-between',
  },
});
