/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import CocktailNavigator from './src/navigation/CocktailNavigator.js';
import {Provider} from 'react-redux';
import Store from './src/store/Store.js';


const App: () => React$Node = () => {
  return (
    <>
      <Provider  store={Store}> 
        <StatusBar barStyle="dark-content" />
          <SafeAreaView style={styles.SafeArea}>
            <CocktailNavigator/>
          </SafeAreaView>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
  },
});

export default App;
