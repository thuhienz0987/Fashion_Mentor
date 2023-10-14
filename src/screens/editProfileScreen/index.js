import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
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
  IMG_Back,
  IMG_Edit,
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
  IC_Calendar,
  IC_Tick,
} from '../../assets/icons';
import ColorCircle from '../../components/colorCircle';
import {TouchableWithoutFeedback} from 'react-native';
import {
  transparent,
  white,
} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import FONT_FAMILY from '../../constants/font.js';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';

const EditProfileScreen = () => {
  const [open, setOpen] = useState(false);
  const [openDpk, setOpenDpk] = useState(false);
  const [value, setValue] = useState(null);
  const [date, setDate] = useState(new Date());
  const [dob, setDob] = useState('15/10/1995');
  const [items, setItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.viewText}>
            <Image source={IMG_Back} />
            <Text style={styles.text}>Edit Profile</Text>
          </View>
        </View>

        <View style={styles.profile1Container}>
          <Image
            source={IMG_Profile1}
            resizeMode="contain"
            style={{flex: 1, width: '100%', height: scale(50), padding: 0}}
          />
          <TouchableOpacity style={styles.bgEdit2}>
            <View>
              <Image source={IMG_Edit} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image source={IMG_Ava} style={styles.ava} resizeMode="cover" />
          <TouchableOpacity style={styles.bgEdit}>
            <View>
              <Image source={IMG_Edit} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.inputMailBox}>
          <View style={styles.viewInputName}>
            <Text style={styles.inputName}>User name</Text>
          </View>
          <View style={styles.viewInput}>
            <TextInput
              value={'Audrey Miller'}
              placeholderTextColor={color.GraySolid}
              style={styles.inputText}
              keyboardType="email-address"
            />
          </View>
        </View>
        <View style={styles.inputMailBox}>
          <View style={styles.viewInputName}>
            <Text style={styles.inputName}>Email</Text>
          </View>
          <View style={styles.viewInput}>
            <TextInput
              value={'audreymiller@gmail.com'}
              placeholderTextColor={color.GraySolid}
              style={styles.inputText}
              keyboardType="email-address"
            />
          </View>
        </View>
        <View style={styles.inputMailBox}>
          <View style={styles.viewInputName}>
            <Text style={styles.inputName}>Gender</Text>
          </View>

          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder={'Male'}
          />
        </View>
        <View style={styles.inputMailBox}>
          <View style={styles.viewInputName}>
            <Text style={styles.inputName}>Date of birth</Text>
          </View>
          <TouchableOpacity
            style={styles.viewInput}
            onPress={() => setOpenDpk(true)}>
            <TextInput
              editable={false}
              value={dob}
              placeholderTextColor={color.GraySolid}
              style={styles.inputText}
              keyboardType="email-address"
            />
            <IC_Calendar />
          </TouchableOpacity>
        </View>
        <View style={styles.inputMailBox}>
          <View style={styles.viewInputName}>
            <Text style={styles.inputName}>Nation</Text>
          </View>
          <View style={styles.viewInput}>
            <TextInput
              value={'Ameria'}
              placeholderTextColor={color.GraySolid}
              style={styles.inputText}
              keyboardType="email-address"
            />
          </View>
          <DatePicker
            modal
            mode="date"
            open={openDpk}
            date={date}
            onConfirm={date => {
              setOpenDpk(false);
              setDate(date);
              setDob(date.toLocaleDateString());
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>

        <IC_Tick style={styles.btn_save} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  btn_save: {
    margin: scale(50),
    alignSelf: 'flex-end',
  },
  inputMailBox: {
    width: scale(326),
    height: scale(100),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputCombobox: {
    justifyContent: 'center',
    alignSelf: 'center',
  },

  viewInputName: {
    marginLeft: scale(15),
    marginBottom: scale(5),
  },
  inputName: {
    color: color.Black,
    fontSize: 16,
    fontFamily: FONT_FAMILY.Lexend,
  },
  viewInput: {
    flexDirection: 'row',
    height: scale(43),
    borderWidth: 1,
    justifyContent: 'space-between',
    borderColor: color.Black,
    fontWeight: '400',
    fontFamily: FONT_FAMILY.Lexend,
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputText: {
    fontFamily: FONT_FAMILY.Lexend,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    justifyContent: 'center',
    color: 'black',
    paddingLeft: scale(15),
  },
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  bgEdit: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: scale(50),
    width: scale(50),
    position: 'absolute',
    top: scale(85),
    left: scale(85),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgEdit2: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: scale(50),
    width: scale(50),
    position: 'absolute',
    top: scale(125),
    right: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile1Container: {
    width: '100%',
    height: scale(195),
    marginTop: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'row',
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
    paddingLeft: 20,
  },
  viewText: {
    flexDirection: 'row',
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
