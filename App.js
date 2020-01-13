/* eslint-disable prettier/prettier */
import React from 'react';
import StackNavigator from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import MainScreen from './Components/MainScreen';
import Loader from './Components/Loader';
import NewPost from './Components/NewPost';
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
const MainNavigator = createStackNavigator({
  Screen1: {
    screen: Loader,
    navigationOptions: {
      headerShown: false,
    },
  },
  Screen2: {
    screen: MainScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Screen3: {
    screen: NewPost,
    navigationOptions: {
      headerShown: false,
      cardStyle: { backgroundColor: '#FFFFFF' },
    },
  },

});
const navigationOptions = {
  header: ({ goBack }) => ({
    left: (<Icon name={'chevron-left'} onPress={() => { goBack() }} />),
  }),
};
const App = createAppContainer(MainNavigator);

export default App;
