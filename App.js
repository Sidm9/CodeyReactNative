/* eslint-disable prettier/prettier */
import React from 'react';
import StackNavigator from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import MainScreen from "./Components/MainScreen";
import Loader from "./Components/Loader";
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
const MainNavigator = createStackNavigator({
  Screen1: {
    screen: Loader,
    navigationOptions: {
      header: null,
    }
  },
  Screen2: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    }
  }
});
const navigationOptions = {header : 'none'};
const App = createAppContainer(MainNavigator);

export default App;