import React from 'react';
import {FlatList} from 'react-native';
import {Card} from '../../components';
import styles from './styles.js';
import PropTypes from 'prop-types';

const ListOfDrinks = ({drinks}) => {
  return (
    <FlatList
      data={drinks}
      renderItem={({item}) => <Card name={item.name} image={item.image} />}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  );
};

ListOfDrinks.propTypes = {
  drinks: PropTypes.array,
};

export default ListOfDrinks;
