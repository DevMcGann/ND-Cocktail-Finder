import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Header, ListOfDrinks} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getDrinks, CleanDrinks} from '../../store/actions/DrinksActions.js';
import PropTypes from 'prop-types';
import styles from './styles.js';

const SearchScreen = ({navigation}) => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const cleanDrinks = () => dispatch(CleanDrinks());
  const fetchedDrinks = useSelector(state => state.drinksArray.drinks);
  const fetching = useSelector(state => state.drinksArray.loading);
  const error = useSelector(state => state.drinksArray.error);

  useEffect(() => {
    const searchDrinks = searchParameter =>
      dispatch(getDrinks(searchParameter));

    if (search) {
      searchDrinks(search);
    }
  }, [dispatch, search]);

  const cancelFromHeader = () => {
    cleanDrinks();
    setSearch('');
  };

  const callbackDataFromHeader = data => {
    setSearch(data);
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        navigation={navigation}
        callback={callbackDataFromHeader}
        cancel={cancelFromHeader}
      />
      <View style={styles.content}>
        {(() => {
          if (!search) {
            return (
              <Text style={styles.defaultText}>
                Type at least 3 Characters to search your favorite Cocktail
              </Text>
            );
          }
          if (!fetching && !fetchedDrinks && search) {
            return (
              <Text style={styles.noResults}>
                Oops! There is no Cocktail with that name!
              </Text>
            );
          }
          if (error !== '') {
            return error;
          }
          if (fetching) {
            return <ActivityIndicator size="large" color="#0000ff" />;
          }

          if (fetchedDrinks) {
            return <ListOfDrinks style={styles.list} drinks={fetchedDrinks} />;
          }
        })()}
      </View>
    </View>
  );
};

SearchScreen.propTypes = {
  getDrinks: PropTypes.func,
  CleanDrinks: PropTypes.func,
  fetchedDrinks: PropTypes.array,
  fetching: PropTypes.bool,
  error: PropTypes.string,
  search: PropTypes.string,
};

export default SearchScreen;
