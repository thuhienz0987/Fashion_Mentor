import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import color from '../../constants/color';
import {IMG_InitImage} from '../../assets/images';
import SubmitButton from '../../components/submitButton';
import scale from '../../constants/responsive';
const InitScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={IMG_InitImage} style={styles.imageBackground}>
        <View style={styles.viewButton}>
          <View style={styles.button}>
            <SubmitButton
              onPress={() => props.navigation.navigate('Login')}
              text={'Login'}
              backgroundColor={color.white}
              color={color.Black}
            />
          </View>
          <View style={styles.button}>
            <SubmitButton
              onPress={() => props.navigation.navigate('SignUp')}
              text={'SignUp'}
              borderColor={color.white}
              color={color.white}
              borderWidth={1}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default InitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  button: {
    alignItems: 'center',
    marginBottom: scale(20),
  },
  viewButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    // marginBottom: scale(),
  },
});
