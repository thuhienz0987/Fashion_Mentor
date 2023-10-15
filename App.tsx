import {View, Text} from 'react-native';
import React from 'react';
import MyNavigationContainer from './src/router/navigateContainer';
import Header from './src/components/header';
import HomeScreen from './src/screens/homeScreen';
import {LogBox} from 'react-native';
import Popup from './src/screens/scanScreen/component/popup';
import ScanScreen from './src/screens/scanScreen';
import BodyShapeScreen from './src/screens/bodyShapeScreen';
import PersonalColorScreen from './src/screens/personalColor';
import EditProfileScreen from './src/screens/editProfileScreen';
import EditProfile from './src/screens/editProfileScreen';

import OnboardingScreen from './src/screens/onboarding';
LogBox.ignoreAllLogs();
const App = () => {
  return <MyNavigationContainer />;
};

export default App;
