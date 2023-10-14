import {View, Text} from 'react-native';
import React from 'react';
import MyNavigationContainer from './src/router/navigateContainer';
import Header from './src/components/header';
import HomeScreen from './src/screens/homeScreen';
import {LogBox} from 'react-native';
<<<<<<< HEAD
import Popup from './src/screens/scanScreen/component/popup';
import ScanScreen from './src/screens/scanScreen';
import BodyShapeScreen from './src/screens/bodyShapeScreen';
import PersonalColorScreen from './src/screens/personalColor';
=======
import EditProfileScreen from './src/screens/editProfileScreen';
import EditProfile from './src/screens/editProfileScreen';
>>>>>>> 7546e2294a638037155fc6e3a18aa116cef1626f

import OnboardingScreen from './src/screens/onboarding';
import Tags from './src/screens/tags';
import TagsScreen from './src/screens/tags';
LogBox.ignoreAllLogs();
const App = () => {
  return <TagsScreen />;
};

export default App;
