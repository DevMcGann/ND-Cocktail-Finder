import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles.js';
import PropTypes from 'prop-types';

const Cancel_Button = props => {
  const {onPress, text} = props;

  return (
    <TouchableOpacity style={styles.cancel_button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

Cancel_Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default Cancel_Button;
