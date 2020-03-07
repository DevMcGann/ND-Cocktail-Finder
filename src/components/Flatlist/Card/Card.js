/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Image, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles.js'

const Card = ({nombre, imagen}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_imagen}>
        <Image
          source={{uri:`${imagen}`}}
          style={styles.imagen}
        />
      </View>
      <Text style={styles.texto}> {nombre}</Text>
    </View>
  );
};



Card.propTypes = {
    nombre : PropTypes.string,
    imagen : PropTypes.string,
};


export default Card;
