import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {RadioButton} from 'react-native-paper';

// component imports
import color from '../../constants/color';
import SubmitButton from '../../components/submitButton';
import scale from '../../constants/responsive';
import axios from '../../api/axios';
import {IMG_Login} from '../../assets/images';
import FONT_FAMILY from '../../constants/font';
import {IC_Eye, IC_EyeOff, IMG_FaceBook, IMG_Google} from '../../assets/icons';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const SignUpScreen = props => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Female'); // Initialize with a default value
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleGenderChange = value => {
    setGender(value);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const SignInPayLoadSchema = yup.object({
    email: yup
      .string()
      .required('Email cannot be blank')
      .email('Invalid email')
      .max(50, 'Email length must be less than 50 characters'),
    password: yup
      .string()
      .required('Password can not be blank')
      .min(6, 'Password length must be more than 6 characters')
      .max(16, 'Password length must be less than 16 characters')
      .matches(
        passwordRegex,
        'Password must contain uppercase, lowercase and number characters',
      ),
    userName: yup
      .string()
      .max(30, 'Invalid name')
      .required('Name cannot be blank'),
    //   gender:yup.string().max()
    passConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      userName: '',
      passwordConfirm: '',
    },
    resolver: yupResolver(SignInPayLoadSchema),
  });

  const handleSubmits = async () => {
    try {
      const response = await axios.post(
        'signUp',
        JSON.stringify({
          email: mail,
          password: pass,
          userName: name,
          gender: gender,
        }),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
        },
      );

      // Check if the response status code is 200 (OK)
      if (response.status === 200) {
        // Registration successful, navigate to another screen
        props.navigation.navigate('Home', {user: response.data});
      } else {
        // Handle other status codes if needed
      }
    } catch (error) {
      if (error.response) {
        // If the server responded with an error status code
        setErrorMessage(error.response.data.message);
        console.log(errorMessage); // Log the error message
        // You can display the error message on the screen or handle it as needed
      } else {
        // If there was a network error (e.g., the server is not reachable)
        console.log('Network Error:', error.message);
      }
    }
  };

  return (
    <ImageBackground source={IMG_Login} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.keyboardAvoidingView}>
          <View style={styles.header}></View>

          <View style={styles.viewTextTitle}>
            <Text style={styles.textTitle}>Sign up</Text>
          </View>

          <ScrollView>
            <View style={styles.body}>
              {/* userName */}
              <Controller
                name="userName"
                control={control}
                render={({field: {onChange, value}}) => (
                  <View style={styles.inputMailBox}>
                    <View style={styles.viewInputName}>
                      <Text style={styles.inputName}>User name</Text>
                    </View>
                    <View style={styles.viewInput}>
                      <TextInput
                        secureTextEntry={false}
                        onChangeText={userName => [
                          onChange(userName),
                          setName(userName),
                        ]}
                        value={value}
                        placeholderTextColor={color.GraySolid}
                        style={styles.inputText}
                      />
                    </View>
                    {errors?.userName && (
                      <Text style={styles.textFailed}>
                        {errors.userName.message}
                      </Text>
                    )}
                  </View>
                )}
              />
              {/* emailInput */}
              <Controller
                name="email"
                control={control}
                render={({field: {onChange, value}}) => (
                  <View style={styles.inputMailBox}>
                    <View style={styles.viewInputName}>
                      <Text style={styles.inputName}>Email</Text>
                    </View>
                    <View style={styles.viewInput}>
                      <TextInput
                        onChangeText={email => [
                          onChange(email),
                          setMail(email),
                          console.log(value),
                        ]}
                        value={value}
                        placeholderTextColor={color.GraySolid}
                        style={styles.inputText}
                        keyboardType="email-address"
                      />
                    </View>
                    {errors?.email && (
                      <Text style={styles.textFailed}>
                        {errors.email.message}
                      </Text>
                    )}
                  </View>
                )}
              />

              {/* passwordInput */}
              <Controller
                name="password"
                control={control}
                render={({field: {onChange, value}}) => (
                  <View style={styles.inputMailBox}>
                    <View style={styles.viewInputName}>
                      <Text style={styles.inputName}>Password</Text>
                    </View>
                    <View style={styles.viewInput}>
                      <TextInput
                        secureTextEntry={passwordVisible}
                        onChangeText={password => [
                          onChange(password),
                          setPass(password),
                        ]}
                        value={value}
                        // placeholder="Password"
                        placeholderTextColor={color.GraySolid}
                        style={styles.inputText}
                      />
                      <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setPasswordVisible(!passwordVisible)}>
                        {passwordVisible ? <IC_Eye /> : <IC_EyeOff />}
                      </TouchableOpacity>
                    </View>
                    {errors?.password && (
                      <Text style={styles.textFailed}>
                        {errors.password.message}
                      </Text>
                    )}
                  </View>
                )}
              />

              {/* passwordConfirmInput */}
              <Controller
                name="passConfirm"
                control={control}
                render={({field: {onChange, value}}) => (
                  <View style={styles.inputMailBox}>
                    <View style={styles.viewInputName}>
                      <Text style={styles.inputName}>Password confirm</Text>
                    </View>
                    <View style={styles.viewInput}>
                      <TextInput
                        secureTextEntry={showConfirmPassword}
                        onChangeText={passwordConfirm => [
                          onChange(passwordConfirm),
                          setPasswordConfirm(passwordConfirm),
                        ]}
                        value={value}
                        placeholderTextColor={color.GraySolid}
                        style={styles.inputText}
                      />
                      <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }>
                        {showConfirmPassword ? <IC_Eye /> : <IC_EyeOff />}
                      </TouchableOpacity>
                    </View>
                    {errors?.passConfirm && (
                      <Text style={styles.textFailed}>
                        {errors.passConfirm.message}
                      </Text>
                    )}
                  </View>
                )}
              />
              <>
                {/* gender */}
                <View style={styles.genderContainer}>
                  <RadioButton.Group
                    onValueChange={handleGenderChange}
                    value={gender}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.radioOption}>
                        <RadioButton value="Female" color={color.Black} />
                        <Text style={{color: color.Black}}>Female</Text>
                      </View>
                      <View style={styles.radioOption}>
                        <RadioButton value="Male" color={color.Black} />
                        <Text style={{color: color.Black}}>Male</Text>
                      </View>
                    </View>
                  </RadioButton.Group>
                </View>
              </>

              <View style={styles.buttonSignIn}>
                <SubmitButton
                  text={'Sign Up'}
                  backgroundColor={color.Black}
                  color={color.white}
                  onPress={handleSubmit(handleSubmits)}
                />
              </View>

              <View style={styles.ViewErrorText}>
                <Text style={styles.textError}>{errorMessage}</Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    // flexGrow: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    height: '30%',
    marginTop: scale(0),
    justifyContent: 'flex-end',
  },

  viewTextTitle: {
    marginTop: scale(80),
    paddingLeft: scale(20),
  },
  textTitle: {
    fontSize: 48,
    fontFamily: FONT_FAMILY.Lexend,
    fontWeight: 'bold',
    color: color.Black,
  },
  ViewTitleText: {
    marginLeft: scale(30),
    marginBottom: scale(30),
  },
  textTile: {
    color: color.white,
    fontSize: 36,
    fontFamily: FONT_FAMILY.Lexend,
  },
  body: {
    height: 'auto',
    flex: 1,
    alignItems: 'center',
  },

  inputMailBox: {
    width: scale(326),
    height: scale(100),
    justifyContent: 'center',
  },
  viewInput: {
    height: scale(43),
    borderWidth: 1,
    justifyContent: 'flex-end',
    borderColor: color.Black,
    fontWeight: '400',
    fontFamily: FONT_FAMILY.Lexend,
    borderRadius: 15,
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
  inputText: {
    color: color.Black,
    fontSize: 16,
    marginLeft: scale(5),
    marginBottom: scale(-5),
    fontWeight: '400',
    fontFamily: FONT_FAMILY.Lexend,
  },
  buttonSignIn: {
    marginTop: scale(61),
  },
  ViewForgotText: {
    marginLeft: scale(100),
    marginTop: scale(5),
  },
  textForgot: {
    color: color.Black,
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  ViewErrorText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(21),
  },
  textError: {
    color: color.RedSolid,
    fontSize: 16,
    fontWeight: '400',
  },
  textFailed: {
    paddingLeft: scale(25),
    marginTop: scale(7),
    justifyContent: 'center',
    fontSize: scale(12),
    color: color.RedSolid,
  },
  eyeIcon: {
    justifyContent: 'flex-end',
    position: 'absolute',
    right: scale(5),
    bottom: scale(5),
  },
  genderContainer: {
    width: '100%',
    justifyContent: 'space-around',
    marginTop: scale(10),
    flexDirection: 'row',
  },
  genderLabel: {
    marginRight: scale(10),
    fontSize: 16,
  },
  radioOption: {
    paddingHorizontal: scale(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewOther: {
    height: scale(30),
    backgroundColor: color.GraySolid,
    alignItems: 'center',
    width: '100%',
    marginBottom: scale(5),
  },
  viewIcon: {
    marginVertical: scale(5),
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: scale(100),
  },
  textNormal: {
    color: color.Black,
    fontSize: 16,
    fontFamily: FONT_FAMILY.Lexend,
  },
  icons: {
    width: scale(33),
    height: scale(33),
  },
});
