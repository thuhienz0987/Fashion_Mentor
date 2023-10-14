import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useContext, useRef} from 'react';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

//component
import color from '../../constants/color';
import SubmitButton from '../../components/submitButton';
import scale from '../../constants/responsive';
import axios from '../../api/axios';
import {
  IMG_FaceBook,
  IMG_Google,
  IMG_Login,
  IMG_NameLogo,
} from '../../assets/images';
import FONT_FAMILY from '../../constants/font';
import {IC_Eye, IC_EyeOff} from '../../assets/icons';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const logInPayLoadSchema = yup.object({
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
});

const LogInScreen = props => {
  // const {setAuth} = useAuth();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(logInPayLoadSchema),
  });

  const handleSubmits = async () => {
    try {
      const response = await axios.post(
        'signIn',
        JSON.stringify({
          email: mail,
          password: pass,
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
            <Text style={styles.textTitle}>Login</Text>
          </View>

          <ScrollView>
            <View style={styles.body}>
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
                        // placeholder="Email"
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

              <View style={styles.buttonSignIn}>
                <SubmitButton
                  text={'Login'}
                  backgroundColor={color.Black}
                  color={color.white}
                  onPress={handleSubmit(handleSubmits)}
                  // loading={loading}
                />
              </View>

              <TouchableOpacity style={styles.ViewForgotText}>
                <Text style={styles.textForgot}>Forgot your password?</Text>
              </TouchableOpacity>

              <View style={styles.ViewErrorText}>
                <Text style={styles.textError}>{errorMessage}</Text>
              </View>

              <View style={styles.viewOther}>
                <Text style={styles.textNormal}>Sign up with</Text>
                <View style={styles.viewIcon}>
                  <TouchableOpacity>
                    <Image
                      source={IMG_Google}
                      style={styles.icons}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image
                      source={IMG_FaceBook}
                      style={styles.icons}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.textNormal}>
                    Already have an account?
                  </Text>

                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('SignUp')}>
                    <Text style={[styles.textNormal, {fontWeight: 'bold'}]}>
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  innerContainer: {
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
    height: '70%',
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

  viewOther: {
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
