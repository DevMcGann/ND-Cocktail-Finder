import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles.js';
import PropTypes from 'prop-types';

const CancelButton = props => {
  const {onPress, text} = props;

  return (
    <TouchableOpacity style={styles.cancelButton} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

CancelButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default CancelButton;
