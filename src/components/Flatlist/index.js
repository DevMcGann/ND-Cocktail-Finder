/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {FlatList} from 'react-native';
import Card from './Card/Card.js';
import styles from './styles.js';
import PropTypes from 'prop-types';

const Lista = ({drinks}) => {
  return (
    <FlatList 
      data={drinks}
      renderItem={({ item }) => <Card nombre={item.strDrink} imagen={item.strDrinkThumb} />}
      keyExtractor={item => item.idDrink}
      style={styles.lista}
    />
  );
};


Lista.propTypes = {
    drinks : PropTypes.array,
};


export default Lista;
