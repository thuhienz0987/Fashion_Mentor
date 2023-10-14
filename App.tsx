import {View, Text} from 'react-native';
import React from 'react';
import MyNavigationContainer from './src/router/navigateContainer';
import Header from './src/components/header';
import HomeScreen from './src/screens/homeScreen';
import {LogBox} from 'react-native';
import FrameExplore from './src/screens/exploreScreen/component/frameExplore';

LogBox.ignoreAllLogs();
const App = () => {
  return <MyNavigationContainer />;
};

export default App;
