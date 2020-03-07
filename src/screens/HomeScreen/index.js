/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image} from 'react-native';
import logo from '../../assets/icons/cocktaillogo.png';
import styles from './styles.js';
import Search_Button from '../../components/Buttons/Search_Button/index.js';
import PropTypes from 'prop-types';


const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.gradient}>
      <View style={styles.screen}>
        <View style={styles.logoContainer}>
          <Image style={styles.icon} source={logo} />
        </View>
        <Search_Button
          text="Search your favorite Cocktail"
          onPress={() => {navigation.navigate('Search');}}
        />
      </View>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;

