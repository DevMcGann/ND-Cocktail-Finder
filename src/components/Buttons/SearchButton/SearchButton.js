import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles.js';
import PropTypes from 'prop-types';

const SearchButton = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.searchButton} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

SearchButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default SearchButton;
