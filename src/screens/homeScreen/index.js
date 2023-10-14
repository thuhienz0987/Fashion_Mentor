import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import color from '../../constants/color';
import Search from '../../components/search';
import HotNew from './component/hotNew';
import BottomTab from '../../components/bottomTab';
import FramePicture from '../../components/framePicture';
import scale from '../../constants/responsive';
import {
  IMG_Class60,
  IMG_HotNew1,
  IMG_HotNew2,
  IMG_NewLook50,
  IMG_Vintage,
} from '../../assets/images';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header text={'FMENTOR'} />
      <Search></Search>
      <ScrollView>
        {/* HOTNEW */}
        <HotNew />

        <View style={styles.viewCollection}>
          <Text style={styles.textTitle}>Collection</Text>
          <Text style={styles.textViewAll}>View all</Text>
        </View>
        {/* collection */}
        <View style={styles.row}>
          <View style={styles.column}>
            <FramePicture
              image={IMG_Class60}
              width={scale(168)}
              height={scale(175)}
              titleText={'Classic 60s'}
              bodyText={'60s collection'}
            />
            <FramePicture
              image={IMG_NewLook50}
              width={scale(168)}
              height={scale(175)}
              titleText={'Newlook 50s'}
              bodyText={'50s collection'}
            />
          </View>

          <View>
            <FramePicture
              image={IMG_Vintage}
              width={scale(168)}
              height={scale(362)}
              titleText={'Vintage'}
              bodyText={'Vintage collection'}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <FramePicture
              image={IMG_Class60}
              width={scale(168)}
              height={scale(175)}
              titleText={'Classic 60s'}
              bodyText={'60s collection'}
            />
            <FramePicture
              image={IMG_NewLook50}
              width={scale(168)}
              height={scale(175)}
              titleText={'Newlook 50s'}
              bodyText={'50s collection'}
            />
          </View>

          <View>
            <FramePicture
              image={IMG_Vintage}
              width={scale(168)}
              height={scale(362)}
              titleText={'Vintage'}
              bodyText={'Vintage collection'}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.tabBottom}>
        <BottomTab />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
