import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useContext, useRef} from 'react';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

//component
import color from '../../constants/color';
//   import FONT_FAMILY from '../../constants/fonts';
//   import {IC_BackwardArrow} from '../../assets/icons';
import SubmitButton from '../../components/submitButton';
import scale from '../../constants/responsive';
import axios from '../../api/axios';
import {
  IMG_HotNew1,
  IMG_HotNew2,
  IMG_HotNew3,
  IMG_HotNew4,
  IMG_InitImage,
} from '../../assets/images';

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
    <SafeAreaView style={styles.container}>
      {/* <Message
          visible={visible}
          title={title}
          clickCancel={() => {
            if (title === 'Success') {
              props.navigation.goBack();
            } else {
              setVisible(false);
            }
          }}
          message={message}
        /> */}
      <ImageBackground
        source={IMG_InitImage}
        resizeMode="cover"
        blurRadius={4}
        style={styles.header}>
        <View style={styles.ViewTitleText}>
          <Text style={styles.textTile}>Welcome FMENTOR!</Text>
          <Text style={styles.textLabel}>Sign in to continue</Text>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        {/* emailInput */}
        <Controller
          name="email"
          control={control}
          render={({field: {onChange, value}}) => (
            <View style={styles.inputMailBox}>
              <View style={styles.viewInput}>
                <TextInput
                  onChangeText={email => [
                    onChange(email),
                    setMail(email),
                    console.log(value),
                  ]}
                  placeholder="Email"
                  value={value}
                  placeholderTextColor={color.GraySolid}
                  style={styles.inputText}
                  keyboardType="email-address"
                />
              </View>
              {errors?.email && (
                <Text style={styles.textFailed}>{errors.email.message}</Text>
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
              <View style={styles.viewInput}>
                <TextInput
                  secureTextEntry={true}
                  onChangeText={password => [
                    onChange(password),
                    setPass(password),
                  ]}
                  value={value}
                  placeholder="Password"
                  placeholderTextColor={color.GraySolid}
                  style={styles.inputText}
                />
              </View>
              {errors?.password && (
                <Text style={styles.textFailed}>{errors.password.message}</Text>
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
      </View>
    </SafeAreaView>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.3,
    backgroundColor: color.Black,
    justifyContent: 'flex-end',
  },
  viewIcon: {
    marginLeft: scale(30),
    width: scale(40),
    height: scale(30),
    marginTop: scale(23),
    alignItems: 'center',
  },
  ViewTitleText: {
    marginLeft: scale(30),
    marginBottom: scale(30),
  },
  textTile: {
    color: color.white,
    fontSize: 36,
    fontWeight: '700',
  },
  textLabel: {
    color: color.white,
    fontSize: 18,
    fontWeight: '400',
  },
  body: {
    flex: 0.7,
    backgroundColor: color.white,
    alignItems: 'center',
  },

  inputMailBox: {
    marginTop: scale(10),
    width: scale(295),
    height: scale(75),
    justifyContent: 'center',
  },
  viewInput: {
    height: scale(50),
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
    borderColor: color.GraySolid,
    fontWeight: '400',
    // borderWidth: 1,
  },
  inputText: {
    color: color.Black,
    fontSize: 16,
    marginLeft: scale(5),
    marginBottom: scale(-10),
    fontWeight: '400',
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
});
