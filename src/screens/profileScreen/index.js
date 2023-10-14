import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import color from '../../constants/color';
import scale from '../../constants/responsive';
import {
  IMG_Ava,
  IMG_Profile1,
  IMG_Logo,
  IMG_Body,
  IMG_Image1,
  IMG_Image2,
  IMG_Image3,
  IMG_Image4,
  IMG_Image5,
} from '../../assets/images';
import {
  IC_AddPost,
  IC_Notify,
  IC_Menu,
  IC_ChangeProfile,
  IC_Setting,
  IC_SettingPrivacy,
  IC_EditProfile,
  IC_Saved,
  IC_Events,
} from '../../assets/icons';
import ColorCircle from '../../components/colorCircle';
import {TouchableWithoutFeedback} from 'react-native';

const ProfileScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.viewText}>
            <Text style={styles.text}>Profile</Text>
          </View>

          <View style={styles.viewItem}>
            <TouchableOpacity style={styles.viewIcon}>
              <IC_Notify />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.viewLogo}
              onPress={() => setIsOpen(!isOpen)}>
              <IC_Menu />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profile1Container}>
          <Image
            source={IMG_Profile1}
            resizeMode="contain"
            style={{flex: 1, width: '100%', height: scale(50), padding: 0}}
          />
        </View>

        <View style={styles.imageContainer}>
          <Image source={IMG_Ava} style={styles.ava} resizeMode="cover" />
        </View>

        <Text style={styles.name}>Audrey Miller</Text>
        <Text style={styles.location}>New York City</Text>

        <View style={styles.numberContainer}>
          <View style={styles.category}>
            <Text style={styles.number}>69</Text>
            <Text style={styles.text1}>Post</Text>
          </View>
          <View style={[styles.category, {width: '40%'}]}>
            <Text style={styles.number}>1306</Text>
            <Text style={styles.text1}>Likes</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.number}>1810</Text>
            <Text style={styles.text1}>Saves</Text>
          </View>
        </View>
        <Text style={styles.aboutText}>About</Text>
        <Text style={styles.text2}>
          Don't be afraid to experiment with different trends.
        </Text>
        <Text style={[styles.aboutText, {marginLeft: scale(25)}]}>
          Personal Color
        </Text>
        <Text style={styles.colorType}>Light Spring</Text>
        <View style={styles.table}>
          <View style={styles.colorTable}>
            <ColorCircle color={color.Lumber} width={scale(20)} />
            <ColorCircle color="#FFC5AE" width={scale(20)} />
            <ColorCircle color="#F9BBA0" width={scale(20)} />
            <ColorCircle color="#F6B39C" width={scale(20)} />
            <ColorCircle color="#CB7B6D" width={scale(20)} />
          </View>
          <View style={[styles.colorTable, {marginTop: scale(15)}]}>
            <ColorCircle color="#607A85" width={scale(20)} />
            <ColorCircle color="#41414C" width={scale(20)} />
            <ColorCircle color="#FFDEBC" width={scale(20)} />
            <ColorCircle color="#CA8B67" width={scale(20)} />
            <ColorCircle color="#CD8053" width={scale(20)} />
          </View>
        </View>
        <Text style={[styles.aboutText, {marginLeft: scale(25)}]}>
          Body Shape
        </Text>
        <Text style={styles.colorType}>HourGlass</Text>
        <Image style={styles.bodyImage} source={IMG_Body} />
        <Text style={styles.aboutText}>Post</Text>
        <View style={{marginTop: scale(20)}}>
          <View style={styles.horizon}>
            <TouchableOpacity style={styles.addPostContainer}>
              <IC_AddPost />
            </TouchableOpacity>
            <Image source={IMG_Image2} />
          </View>
          <View style={[styles.horizon, {marginTop: scale(10)}]}>
            <Image source={IMG_Image3} />
            <Image source={IMG_Image4} />
          </View>
          <View style={[styles.horizon, {marginTop: scale(10)}]}>
            <Image source={IMG_Image5} />
            <Image source={IMG_Image1} />
          </View>
          <View style={[styles.horizon, {marginTop: scale(10)}]}>
            <Image source={IMG_Image2} />
            <Image source={IMG_Image3} />
          </View>
        </View>
      </ScrollView>
      {isOpen ? (
        <TouchableOpacity
          style={styles.darkBg}
          onPress={() => setIsOpen(false)}>
          <View style={styles.settingContainer}>
            <TouchableWithoutFeedback>
              <Text
                style={{
                  fontSize: 27,
                  fontWeight: 'bold',
                  color: color.Black,
                  marginLeft: scale(15),
                  marginTop: scale(15),
                }}>
                Setting
              </Text>
            </TouchableWithoutFeedback>
            <View style={styles.container2}>
              <TouchableOpacity style={styles.contentContainer}>
                <IC_ChangeProfile />
                <Text style={styles.content}>Change your profile picture</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.contentContainer}>
                <IC_EditProfile />
                <Text style={styles.content}>Edit profile</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.contentContainer}>
                <IC_SettingPrivacy />
                <Text style={styles.content}>Settings and Privacy</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.contentContainer}>
                <IC_Saved />
                <Text style={styles.content}>Saved</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.contentContainer,
                  {borderBottomColor: 'transparent'},
                ]}>
                <IC_Events />
                <Text style={styles.content}>Your events</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },

  profile1Container: {
    width: '100%',
    height: scale(195),
    marginTop: scale(50),
  },

  imageContainer: {
    width: scale(139),
    height: scale(139),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(100),
    borderWidth: 1,
    marginLeft: scale(230),
    padding: 0,
    marginTop: scale(60),
    borderColor: 'transparent',
    position: 'absolute',
  },
  ava: {
    width: scale(139),
    height: scale(139),
    borderRadius: scale(100),
    borderWidth: 1,
  },
  container1: {
    paddingHorizontal: scale(20),
    // flex: 1,
    flexDirection: 'row',
    height: scale(70),
    // backgroundColor: color.GraySolid,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: color.Black,
    fontSize: 26,
    fontWeight: 'bold',
  },
  viewText: {
    width: '70%',
  },
  viewItem: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(50),
  },
  viewLogo: {
    width: '85%',
    height: '85%',
    marginLeft: scale(15),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: color.Black,
    alignSelf: 'center',
  },
  location: {
    fontSize: 12,
    alignSelf: 'center',
    color: color.PhilippineSilver,
  },
  numberContainer: {
    width: '100%',
    height: scale(50),
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  number: {
    color: color.Black,
    fontSize: 12,
    fontWeight: 'bold',
  },
  category: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    borderRightColor: color.PhilippineSilver,
    borderRightWidth: 1,
  },
  text1: {
    fontSize: 12,
    color: color.PhilippineSilver,
  },
  aboutText: {
    color: color.Black,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: scale(20),
    marginLeft: scale(10),
  },
  text2: {
    color: color.PhilippineSilver,
    fontSize: 10,
    marginLeft: scale(25),
    marginTop: scale(10),
  },
  colorType: {
    color: color.PhilippineSilver,
    fontSize: 10,
    marginLeft: scale(25),
    marginTop: scale(20),
  },
  colorTable: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
  },
  table: {
    marginTop: scale(20),
    marginLeft: scale(25),
  },
  bodyImage: {
    position: 'absolute',
    marginTop: scale(550),
    marginLeft: scale(180),
  },
  horizon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addPostContainer: {
    width: scale(179),
    height: scale(132),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: color.PhilippineSilver,
  },

  settingContainer: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    backgroundColor: color.white,
    bottom: 0,
    borderWidth: 1,
    borderColor: 'transparent',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  content: {
    fontSize: 12,
    color: color.Black,
    marginLeft: scale(10),
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: '#F6F5F5',
    borderBottomWidth: 0.5,
    height: scale(60),
    marginHorizontal: scale(15),
  },

  container2: {
    width: '100%',
    height: '85%',
    marginTop: scale(15),
    justifyContent: 'space-between',
    paddingBottom: scale(40),
  },

  darkBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
