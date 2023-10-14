import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitScreen from '../screens/initScreen';
import LogInScreen from '../screens/LogInScreen';
import {StyleSheet} from 'react-native';
import HomeScreen from '../screens/homeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import EventScreen from '../screens/eventScreen';
import EventDetailScreen from '../screens/EventDetailScreen';

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
          <Stack.Screen name="Event" component={EventScreen} />
          <Stack.Screen name="EventDetail" component={EventDetailScreen} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigationContainer;

const styles = StyleSheet.create({});
