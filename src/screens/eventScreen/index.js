import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Header from '../../components/header';
import color from '../../constants/color';
import scale from '../../constants/responsive';
import {IC_Search, IC_Delete} from '../../assets/icons';
import FrameEvent from './components/frameEvent';
import {IMG_EventImage1, IMG_HotNew1, IMG_HotNew2, IMG_HotNew3, IMG_HotNew4} from '../../assets/images';
import {isPropertySignature} from 'typescript';
import FrameCompetition from './components/frameCompetition';
import BottomTab from '../../components/bottomTab';
import { useNavigation } from '@react-navigation/native';

const EventScreen = props => {
  const navigation = useNavigation()
  const [isEventsSelected, setIsEventsSelected] = useState('Events');
  const [value, setValue] = useState('');
  const data = [
    {
      image: IMG_EventImage1,
      eventName: 'HANG UP HELP OUT 2022 STREET STORE',
      date: 'Oct 10, 2023',
      address: 'Thu Duc, HCM',
    },
    {
      image: IMG_HotNew3,
      eventName: 'HANG UP HELP OUT 2022 STREET STORE',
      date: 'Oct 10, 2023',
      address: 'Thu Duc, HCM',
    },
    {
      image: IMG_HotNew2,
      eventName: 'HANG UP HELP OUT 2022 STREET STORE',
      date: 'Oct 10, 2023',
      address: 'Thu Duc, HCM',
    },
    {
      image: IMG_HotNew4,
      eventName: 'HANG UP HELP OUT 2022 STREET STORE',
      date: 'Oct 10, 2023',
      address: 'Thu Duc, HCM',
    },
    {
      image: IMG_HotNew1,
      eventName: 'HANG UP HELP OUT 2022 STREET STORE',
      date: 'Oct 10, 2023',
      address: 'Thu Duc, HCM',
    },
    {
      image: IMG_HotNew3,
      eventName: 'HANG UP HELP OUT 2022 STREET STORE',
      date: 'Oct 10, 2023',
      address: 'Thu Duc, HCM',
    },
  ];

  const data1 = [
    {
      image: IMG_EventImage1,
      eventName: 'THROUGH BACK THE 60S ',
      date: 'Oct 3, 2023 - Oct 10, 2023',
    },
    {
      image: IMG_HotNew4,
      eventName: 'HANG UP HELP OUT 2022 STREET STORE',
      date: 'Oct 3, 2023 - Oct 10, 2023',
    },
    {
      image: IMG_HotNew1,
      eventName: 'HANG UP HELP OUT 2022 STREET STORE',
      date: 'Oct 3, 2023 - Oct 10, 2023',
    },
    {
      image: IMG_HotNew3,
      eventName: 'HANG UP HELP OUT 2022 STREET STORE',
      date: 'Oct 3, 2023 - Oct 10, 2023',
    },
    {
      image: IMG_HotNew4,
      eventName: 'HANG UP HELP OUT 2022 STREET STORE',
      date: 'Oct 3, 2023 - Oct 10, 2023',
    },
    {
      image: IMG_HotNew2,
      eventName: 'HANG UP HELP OUT 2022 STREET STORE',
      date: 'Oct 3, 2023 - Oct 10, 2023',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header text="Events" />
      {isEventsSelected === 'Events' ? (
        <View style={styles.switch}>
          <TouchableOpacity
            style={styles.container1}
            onPress={() => setIsEventsSelected('Events')}>
            <Text style={styles.switchText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container2}
            onPress={() => setIsEventsSelected('Competitions')}>
            <Text style={[styles.switchText, {color: '#292526'}]}>
              Competitions
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.switch}>
          <TouchableOpacity
            style={styles.container2}
            onPress={() => setIsEventsSelected('Events')}>
            <Text style={[styles.switchText, {color: '#292526'}]}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container1}
            onPress={() => setIsEventsSelected('Competitions')}>
            <Text style={styles.switchText}>Competitions</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.searchBar}>
        <TouchableOpacity>
          <IC_Search />
        </TouchableOpacity>
        <TextInput
          onChangeText={text => setValue(text)}
          selectionColor={color.GraySolid}
          placeholder="Search ..."
          placeholderTextColor={color.GraySolid}
          style={styles.textInput}
          value={value}
        />
        <TouchableOpacity onPress={() => setValue('')}>
          <IC_Delete marginRight={scale(10)} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {isEventsSelected === 'Events' ? (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <FrameEvent
                image={item.image}
                eventName={item.eventName}
                address={item.address}
                date={item.date}
                onPress={() => navigation.navigate('EventDetail')}
              />
            )}
          />
        ) : (
          <FlatList
            data={data1}
            renderItem={({item}) => (
              <FrameCompetition
                image={item.image}
                eventName={item.eventName}
                date={item.date}
                onPress={() => props.navigation.navigate('EventDetail')}
              />
            )}
          />
        )}
      </View>
      <BottomTab></BottomTab>
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  switch: {
    width: '80%',
    height: scale(50),
    backgroundColor: '#F3F4F5',
    alignSelf: 'center',
    marginTop: scale(20),
    borderRadius: scale(40),
    flexDirection: 'row',
  },
  switchText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: color.white,
  },
  container1: {
    width: '50%',
    backgroundColor: '#292526',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(40),
  },
  container2: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(40),
  },
  searchBar: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(5),
    borderRadius: scale(30),
    backgroundColor: color.AntiFlashWhite,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: scale(20),
  },
  text: {
    fontWeight: 'normal',
    fontSize: scale(24),
    textAlign: 'center',
    color: color.white,
  },
  textInput: {
    fontWeight: 'normal',
    height: scale(42),
    color: color.Black,
    top: scale(2),
    width: scale(220),
    marginLeft: scale(10),
  },
});
