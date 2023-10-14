import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitScreen from '../screens/initScreen';
import LogInScreen from '../screens/LogInScreen';
import {StyleSheet} from 'react-native';
import HomeScreen from '../screens/homeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ScanScreen from '../screens/scanScreen';
import BodyShapeScreen from '../screens/bodyShapeScreen';
import PersonalColorScreen from '../screens/personalColor';
import ProfileScreen from '../screens/profileScreen';

const Stack = createNativeStackNavigator();

const MyNavigationContainer = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Init">
        <>
          <Stack.Screen name="Login" component={LogInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />

          {/* InitScreen */}
          <Stack.Screen name="Init" component={InitScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />

          {/* AI */}
          <Stack.Screen name="Scan" component={ScanScreen} />
          <Stack.Screen name="BodyShape" component={BodyShapeScreen} />
          <Stack.Screen name="PersonalColor" component={PersonalColorScreen} />

          {/* profile */}
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigationContainer;

const styles = StyleSheet.create({});
