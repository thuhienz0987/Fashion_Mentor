import {View, Text} from 'react-native';
import React from 'react';
import MyNavigationContainer from './src/router/navigateContainer';
import Header from './src/components/header';
import HomeScreen from './src/screens/homeScreen';
import {LogBox} from 'react-native';
import OnboardingScreen from './src/screens/onboarding';

LogBox.ignoreAllLogs();
const App = () => {
<<<<<<< HEAD
  return <OnboardingScreen />;
=======
  return <MyNavigationContainer />;
>>>>>>> bd6d5dbcb7282a6ceed78371ec8c0aa32a3eaa97
};

export default App;
