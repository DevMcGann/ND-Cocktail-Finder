import React from 'react';
import {View, Image} from 'react-native';
import logo from '../../assets/icons/cocktaillogo.png';
import styles from './styles.js';
import SearchButton from '../../components/Buttons/SearchButton/index.js';
import PropTypes from 'prop-types';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.gradient}>
      <View style={styles.screen}>
        <View style={styles.logoContainer}>
          <Image style={styles.icon} source={logo} />
        </View>
        <SearchButton
          text="Search your favorite Cocktail"
          onPress={() => {
            navigation.navigate('Search');
          }}
        />
      </View>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
