import {View, Text} from 'react-native';
import React from 'react';
import MyNavigationContainer from './src/router/navigateContainer';
import Header from './src/components/header';
import HomeScreen from './src/screens/homeScreen';
import {LogBox} from 'react-native';
import EditProfileScreen from './src/screens/editProfileScreen';
import EditProfile from './src/screens/editProfileScreen';

import OnboardingScreen from './src/screens/onboarding';
import Tags from './src/screens/tags';
import TagsScreen from './src/screens/tags';
LogBox.ignoreAllLogs();
const App = () => {
  return <TagsScreen />;
};

export default App;
