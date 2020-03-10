import React from 'react';
import {Text, Image, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles.js';

const Card = ({name, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_imagen}>
        <Image source={{uri: `${image}`}} style={styles.imagen} />
      </View>
      <Text style={styles.texto}> {name}</Text>
    </View>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
