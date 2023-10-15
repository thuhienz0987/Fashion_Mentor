import {View, Text} from 'react-native';
import React from 'react';
import MyNavigationContainer from './src/router/navigateContainer';
import Header from './src/components/header';
import HomeScreen from './src/screens/homeScreen';
import {LogBox} from 'react-native';

import OnboardingScreen from './src/screens/onboarding';
import EventScreen from './src/screens/eventScreen';
import EventDetailScreen from './src/screens/EventDetailScreen';
import CompetitionDetailScreen from './src/screens/CompetitionDetailScreen';
import ExploreScreen from '../SheCodeProject/src/screens/exploreScreen';
LogBox.ignoreAllLogs();
const App = () => {
  return <MyNavigationContainer />;
};

export default App;
