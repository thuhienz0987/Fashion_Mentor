import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  PermissionsAndroid,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import {
  IMG_BodyShape,
  IMG_Scan,
  IMG_Waist,
  IMG_bust,
} from '../../assets/images';
import Modal from 'react-native-modal';
import color from '../../constants/color';
import {IC_AddImage, IC_AddPost} from '../../assets/icons';
import scale from '../../constants/responsive';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import SubmitButton from '../../components/submitButton';
import Popup from './component/popup';
import BottomTab from '../../components/bottomTab';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';

const ScanScreen = props => {
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      // Đặt mã nguồn bạn muốn chạy mỗi khi màn hình được focus ở đây
      setVisible(false);
      setScreen(false);
      setPhotoTaken(false);
      setImage(
        'https://media.istockphoto.com/id/1061226004/vi/anh/h%C3%ACnh-%E1%BA%A3nh-ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-tr%E1%BA%BB-xinh-%C4%91%E1%BA%B9p-h%E1%BA%A1nh-ph%C3%BAc-m%E1%BB%89m-c%C6%B0%E1%BB%9Di.jpg?s=612x612&w=0&k=20&c=57Cngclv80iFQ3tkUvkqKCN9gKzxe5SpbZAde-v_kkM=',
      );
    }, []),
  );
  const [visible, setVisible] = useState(false);
  const [photoTaken, setPhotoTaken] = useState(false);
  const [screen, setScreen] = useState(false);
  const [image, setImage] = useState(
    'https://media.istockphoto.com/id/1061226004/vi/anh/h%C3%ACnh-%E1%BA%A3nh-ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-tr%E1%BA%BB-xinh-%C4%91%E1%BA%B9p-h%E1%BA%A1nh-ph%C3%BAc-m%E1%BB%89m-c%C6%B0%E1%BB%9Di.jpg?s=612x612&w=0&k=20&c=57Cngclv80iFQ3tkUvkqKCN9gKzxe5SpbZAde-v_kkM=',
  );
  let options = {
    savePhotos: true,
    mediaType: 'photo',
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setImage(result.assets[0].uri);
      setVisible(false);
      startAnimation();
      // Đặt giá trị photoTaken thành true sau khi chụp ảnh
      setPhotoTaken(true);
      setTimeout(() => {
        // Chuyển màn hình sau 5 giây
        navigation.navigate(screen ? 'PersonalColor' : 'BodyShape'); // Thay 'LoginScreen' bằng màn hình bạn muốn chuyển đến
      }, 5000);
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setImage(result.assets[0].uri);
    setVisible(false);
    startAnimation();
    // Đặt giá trị photoTaken thành true sau khi chụp ảnh
    setPhotoTaken(true);
    setTimeout(() => {
      // Chuyển màn hình sau 5 giây
      navigation.navigate(screen ? 'PersonalColor' : 'BodyShape'); // Thay 'LoginScreen' bằng màn hình bạn muốn chuyển đến
    }, 5000);
  };
  const {width, height} = Dimensions.get('window');
  const imageWidth = width;
  const imageHeight = height;

  const [scrollValue] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  });

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scrollValue, {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(scrollValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
        Animated.timing(scrollValue, {
          toValue: -1,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(scrollValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  const interpolatedScroll = scrollValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [imageHeight, 0, -imageHeight],
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: image}}
        style={styles.background}
        resizeMethod="contain">
        <Animated.Image
          source={IMG_Scan}
          style={[
            styles.background,
            {
              transform: [{translateY: interpolatedScroll}],
            },
          ]}
        />
        {photoTaken ? (
          <View style={styles.hip}>
            <View
              source={IMG_BodyShape}
              style={{
                position: 'absolute',
                right: 0,
                backgroundColor: color.Black,
              }}></View>
          </View>
        ) : (
          // <View>
          <View style={styles.viewButton}>
            <View style={styles.button}>
              <SubmitButton
                onPress={() => {
                  [setVisible(true), setScreen(false)];
                }}
                text={'BODY SHAPE'}
                backgroundColor={color.white}
                color={color.Black}
              />
            </View>
            <View style={styles.button}>
              <SubmitButton
                onPress={() => {
                  [setVisible(true), setScreen(true)];
                }}
                text={'PERSONAL COLOR'}
                borderColor={color.white}
                color={color.white}
                borderWidth={1}
              />
            </View>
          </View>
          // </View>
        )}
      </ImageBackground>
      <Modal
        style={styles.viewModal}
        onBackdropPress={() => setVisible(false)}
        onBackButtonPress={() => setVisible(false)}
        isVisible={visible}>
        <Popup onPressUpload={openGallery} onPressCamera={openCamera}></Popup>
      </Modal>

      <BottomTab></BottomTab>
    </SafeAreaView>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  viewIcon: {
    // position: 'fixed',
    position: 'absolute',
    top: 100,

    backgroundColor: color.Black,
  },
  // addImageIcon: {
  //   zIndex: 1, // Đặt z-index để đè lên hình ảnh
  // },
  button: {
    alignItems: 'center',
    marginBottom: scale(20),
  },
  viewButton: {
    width: '100%',
    flex: 1,
    alignContent: 'flex-end',
  },
  hip: {
    // backgroundColor: color.GraySolid,
  },
});
