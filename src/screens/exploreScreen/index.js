import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import color from '../../constants/color';
import Header from '../../components/header';
import SearchFilter from '../../components/searchFilter';
import FrameExplore from './component/frameExplore';
import {IMG_AvaComment, IMG_Image1} from '../../assets/images';
import scale from '../../constants/responsive';
import {Touchable} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {IC_AddExplore, IC_Camera, IC_Link, IC_Send} from '../../assets/icons';
import {TextInput} from 'react-native-paper';
import Comment from './component/comment';

const ExploreScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isComment, setIsComment] = useState(false);

  const data = [
    {
      id: 1,
      image: IMG_Image1,
      titleText: 'Jenie Kim',
      bodyText:
        'Life is like a mirror, we get the best results when we smile. I live my today outfit.',
      favNum: '1234',
      savedNum: '234',
      commentNum: '234',
    },
    {
      id: 2,
      image: IMG_Image1,
      titleText: 'Jenie Kim',
      bodyText:
        'Life is like a mirror, we get the best results when we smile. I live my today outfit.',
      favNum: '1234',
      savedNum: '234',
      commentNum: '234',
    },
    {
      id: 3,
      image: IMG_Image1,
      titleText: 'Jenie Kim',
      bodyText:
        'Life is like a mirror, we get the best results when we smile. I live my today outfit.',
      favNum: '1234',
      savedNum: '234',
      commentNum: '234',
    },
    {
      id: 4,
      image: IMG_Image1,
      titleText: 'Jenie Kim',
      bodyText:
        'Life is like a mirror, we get the best results when we smile. I live my today outfit.',
      favNum: '1234',
      savedNum: '234',
      commentNum: '234',
    },
  ];

  const data1 = [
    {
      image: IMG_AvaComment,
      name: 'Kim Kadash',
      hour: '4:32 PM',
      comment:
        'In the heart of the bustling city, amidst the cacophony of honking horns and hurried footsteps, there lies a quaint little cafe that feels like a sanctuary of calm. The aroma of freshly brewed coffee mingles with the scent of freshly baked pastries.',
    },
    {
      image: IMG_AvaComment,
      name: 'Kim Kadash',
      hour: '4:32 PM',
      comment:
        'In the heart of the bustling city, amidst the cacophony of honking horns and hurried footsteps, there lies a quaint little cafe that feels like a sanctuary of calm. The aroma of freshly brewed coffee mingles with the scent of freshly baked pastries.',
    },
    {
      image: IMG_AvaComment,
      name: 'Kim Kadash',
      hour: '4:32 PM',
      comment:
        'In the heart of the bustling city, amidst the cacophony of honking horns and hurried footsteps, there lies a quaint little cafe that feels like a sanctuary of calm. The aroma of freshly brewed coffee mingles with the scent of freshly baked pastries.',
    },
    {
      image: IMG_AvaComment,
      name: 'Kim Kadash',
      hour: '4:32 PM',
      comment:
        'In the heart of the bustling city, amidst the cacophony of honking horns and hurried footsteps, there lies a quaint little cafe that feels like a sanctuary of calm. The aroma of freshly brewed coffee mingles with the scent of freshly baked pastries.',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Explore" />
      <SearchFilter />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <FrameExplore
              image={item.image}
              titleText={item.titleText}
              bodyText={item.bodyText}
              favNum={item.favNum}
              savedNum={item.savedNum}
              commentNum={item.commentNum}
              onPress={() => setIsComment(!isComment)}
            />
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsOpen(!isOpen)}>
        <IC_AddExplore />
      </TouchableOpacity>
      {isOpen ? (
        <TouchableOpacity
          style={styles.darkBg}
          onPress={() => setIsOpen(false)}>
          <View style={styles.newPostContainer}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: color.Black,
                marginTop: scale(30),
                marginLeft: scale(20),
              }}>
              New Post
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: scale(20, 'w'),
              }}>
              <TextInput
                style={styles.textinput}
                multiline={true}
                numberOfLines={4}
                maxLength={500}
                wrapText={true}
                placeholder=" Write something here..."></TextInput>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  bottom: scale(20),
                  left: scale(40),
                }}>
                <TouchableOpacity>
                  <IC_Camera />
                </TouchableOpacity>
                <TouchableOpacity>
                  <IC_Link style={{marginLeft: scale(15)}} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <IC_Send style={{marginLeft: scale(220)}} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.hagtagContainer}>
            <View style={{justifyContent: 'space-between'}}>
              <TouchableOpacity style={styles.hagtag}>
                <Text style={{color: '#666666'}}>#Colorful</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hagtag}>
                <Text style={{color: '#666666'}}>#Colorful</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hagtag}>
                <Text style={{color: '#666666'}}>#Colorful</Text>
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'space-between'}}>
              <TouchableOpacity style={styles.hagtag}>
                <Text style={{color: '#666666'}}>#Colorful</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hagtag}>
                <Text style={{color: '#666666'}}>#Colorful</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hagtag}>
                <Text style={{color: '#666666'}}>#Colorful</Text>
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'space-between'}}>
              <TouchableOpacity style={styles.hagtag}>
                <Text style={{color: '#666666'}}>#Colorful</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hagtag}>
                <Text style={{color: '#666666'}}>#Colorful</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hagtag}>
                <Text style={{color: '#666666'}}>#Colorful</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ) : null}

      {isComment ? (
        <TouchableOpacity
          style={styles.darkBg}
          onPress={() => setIsComment(false)}>
          <View style={styles.newPostContainer}>
            <TouchableWithoutFeedback>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: color.Black,
                  marginTop: scale(30),
                  marginLeft: scale(20),
                }}>
                Comment
              </Text>
            </TouchableWithoutFeedback>
            <FlatList
              data={data1}
              renderItem={({item}) => (
                <Comment
                  name={item.name}
                  hour={item.hour}
                  comment={item.comment}
                  image={item.image}
                />
              )}
            />
          </View>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },

  button: {
    width: scale(78),
    height: scale(78),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(39),
    position: 'absolute',
    bottom: scale(120),
    left: scale(20),
  },

  darkBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  newPostContainer: {
    width: '100%',
    height: '50%',
    backgroundColor: color.white,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
  },

  textinput: {
    width: '90%',
    height: scale(160),
    backgroundColor: color.white,
    borderWidth: 1,
    fontSize: 12,
    color: color.Argent,
    padding: scale(3),
  },
  hagtagContainer: {
    width: '90%',
    height: scale(150),
    marginTop: scale(700),
    position: 'fixed',
    marginHorizontal: scale(20),
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: scale(15),
  },
  hagtag: {
    width: scale(98),
    height: scale(30),
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    color: '#666666',
  },
  name: {
    fontSize: 12,
    fontWeight: '500',
    color: color.Black,
  },
  hour: {
    color: '#6E6E6E',
    fontSize: 7,
    marginLeft: scale(10),
  },

  comment: {
    fontSize: 10,
    color: '#B6B6B6',
  },
});
