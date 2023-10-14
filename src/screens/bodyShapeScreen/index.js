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
import {IMG_OutFit1} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';

const BodyShapeScreen = () => {
  const navigation = useNavigation();
  const [size, setSize] = useState('S');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
          <IC_Back></IC_Back>
        </TouchableOpacity>
        <Text style={styles.textTitle}>Triangle</Text>
        <TouchableOpacity>
          <IC_SeeMore></IC_SeeMore>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.viewDescription}>
          <Text style={styles.textDescription}>
            In a triangle body shape the lower part of the body is heavier than
            the upper part. Weight visible at hips, thighs and lower tummy area.
            In a triangle body shape the lower part of the body is heavier than
            the upper part. Weight visible at hips, thighs and lower tummy area.
            This is possible by creating the illusion of volume on the upper
            body.
          </Text>
        </View>

        <View style={styles.viewSize}>
          <Text style={styles.textHead}>Your size</Text>
          <View style={styles.list}>
            <View style={[styles.itemList, {backgroundColor: color.Black}]}>
              <Text style={[styles.textList, {color: color.white}]}>S</Text>
            </View>

            <View style={styles.itemList}>
              <Text style={styles.textList}>M</Text>
            </View>

            <View style={styles.itemList}>
              <Text style={styles.textList}>L</Text>
            </View>

            <View style={styles.itemList}>
              <Text style={styles.textList}>XL</Text>
            </View>

            <View style={styles.itemList}>
              <Text style={styles.textList}>XXL</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.textHead}>Recommend outfit</Text>

          <View style={styles.viewDemo}>
            <Image source={IMG_OutFit1} resizeMode="contain"></Image>
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
          onPress={() => navigation.navigate('Scan')}>
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

export default BodyShapeScreen;

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
    width: '100%',
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
    borderWidth: 1,
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
