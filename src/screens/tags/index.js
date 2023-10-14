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
import Tags from './components';

const TagsScreen = () => {
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
            <Image source={IMG_Back} />
        <Text style={styles.text}>Let's get started!</Text>

        <View style={{marginTop: scale(30)}}>
            <Text style={styles.qText}>What age group are you interested in?</Text>
            <View style={styles.containerTags}>
              <Tags text={'Less than 15'}/>
              <Tags text={'15 - 18'}/>
              <Tags text={'18 - 24'}/>
              <Tags text={'25 - 40'}/>
              <Tags text={'41 - 56'}/>
              <Tags text={'57 - 75'}/>
              <Tags text={'More than 75'}/>
            </View>

        </View>
        <View style={{marginTop: scale(30)}}>
            <Text style={styles.qText}>Choose your career</Text>
            <View style={styles.containerTags}>
            <Tags text={'#Fashionista'}/>
            <Tags text={'#KOL'}/>
            <Tags text={'#Teacher'}/>
            <Tags text={'#Doctor'}/>
            <Tags text={'#Nurse'}/>
            <Tags text={'#IT'}/>
            <Tags text={'#Specialists'}/>
            <Tags text={'#Engineer'}/>
            <Tags text={'#Scientist'}/>
            <Tags text={'#E-commerce'}/>
            <Tags text={'#Telehealth'}/>
            <Tags text={'#Creators'}/>
            <Tags text={'#Artist'}/>
            <Tags text={'#Student'}/>
              </View>

        </View>
        <View style={{marginTop: scale(30)}}>
            <Text style={styles.qText}>Your interesting</Text>
            <View style={styles.containerTags}>
            <Tags text={'#Colorful'}/>
            <Tags text={'#Sexy'}/>
            <Tags text={'#Cute'}/>
            <Tags text={'#Cool'}/>
            <Tags text={'#Elegant'}/>
            <Tags text={'#Casual'}/>
            <Tags text={'#Vintage'}/>
            <Tags text={'#Minimalist'}/>
            <Tags text={'#Sporty'}/>
              </View>

        </View>

        <Text style={[styles.qText,{marginVertical:scale(30), alignSelf:'center'}]}>Do you want to explore yourself?</Text>

<View style={{flexDirection: 'row', justifyContent: 'space-around'}}><View style={styles.btnYes}><Text style={{color: 'white'}}>Yes</Text></View>
<View style={styles.btnNo}><Text style={{color: 'black'}}>No</Text></View></View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default TagsScreen;

const styles = StyleSheet.create({

  container: {
    backgroundColor: color.white,
    flex: 1,
    padding: scale(20)
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
    marginTop: scale(10),
    color: color.Black,
    fontSize: 26,
    fontWeight: 'bold',
  },
  viewText: {

    flexDirection: 'row',
  },

  qText: {
    fontSize: 15,
    color: color.PhilippineSilver,
  },

  containerTags:{
    flexDirection:'row', flexWrap:'wrap'
  },
  btnYes:
  {
    backgroundColor: 'black',
    height: scale(50),
    width: scale(150),
    borderRadius: scale(25),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(15),
  },
  btnNo:
  {
    backgroundColor: 'white',
    height: scale(50),
    width: scale(150),
    borderRadius: scale(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: scale(15),

  }
});
