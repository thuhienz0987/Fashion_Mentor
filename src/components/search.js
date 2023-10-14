import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import scale from '../constants/responsive';
import color from '../constants/color';
import {IC_Search, IC_Delete, IC_ChangeTheme} from '../assets/icons/index';

const Search = () => {
  const [value, setValue] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View>
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
      </View>
      <View style={styles.changeTheme}>
        <IC_ChangeTheme />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: scale(10),
  },
  searchBar: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(5),
    borderRadius: scale(30),
    backgroundColor: color.AntiFlashWhite,
    // marginTop: scale(5),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
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
    width: scale(180),
    marginLeft: scale(10),
  },
  changeTheme: {
    // backgroundColor: color.Grullo,
    marginLeft: scale(10),
  },
});
