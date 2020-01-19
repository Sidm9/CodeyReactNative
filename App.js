/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import StackNavigator from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import MainScreen from './Components/MainScreen';
import Loader from './Components/Loader';
import Logger from './Components/Logger';
import SignUp from './Components/SignUp';
import NewPost from './Components/NewPost';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const MainNavigator = createStackNavigator({
  ScreenDefaultForNow: {
    screen: Loader,
    navigationOptions: {
      headerShown: false,
    },
  },
  ScreenMainScreen: {
    screen: MainScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  ScreenLogin: {
    screen: Logger,
    navigationOptions: {
      headerShown: false,
    },
  },
  ScreenSignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false,
    },
  },
  ScreenNewPost: {
    screen: NewPost,
    navigationOptions: {
      headerShown: false,
      cardStyle: { backgroundColor: '#FFFFFF' },
    },
  },

});
const navigationOptions = {
  header: ({ goBack }) => ({
    // left: (<Icon name={'chevron-left'} onPress={() => { goBack() }} />),
  }),
};
const App = createAppContainer(MainNavigator);

export default App;
