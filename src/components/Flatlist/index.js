import React from 'react';
import {FlatList} from 'react-native';
import Card from './Card/Card.js';
import styles from './styles.js';
import PropTypes from 'prop-types';

const ListOfDrinks = ({drinks}) => {
  return (
    <FlatList
      data={drinks}
      renderItem={({item}) => (
        <Card nombre={item.strDrink} imagen={item.strDrinkThumb} />
      )}
      keyExtractor={item => item.idDrink}
      style={styles.list}
    />
  );
};

ListOfDrinks.propTypes = {
  drinks: PropTypes.array,
};

export default ListOfDrinks;
