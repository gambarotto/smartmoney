/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'

import Routes from './src/routes'
import store from './src/store'
import Colors from './src/styles/Colors'

export default function App() {
  return (
    <Provider store={store}>
    <StatusBar barStyle='light-content' backgroundColor={Colors.background}  />
      <Routes />
    </Provider>
  );
};

