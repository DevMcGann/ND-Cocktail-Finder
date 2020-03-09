/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/** <ActivityIndicator size="large" color="#0000ff" /> */


import React,{useState, useEffect} from 'react';
import {View, ActivityIndicator,Text} from 'react-native';
//componentes
import Header from '../../components/Header/index.js';
import Lista from '../../components/Flatlist/index.js';

//redux

import { useDispatch, useSelector } from 'react-redux';
import {getDrinks,CleanDrinks} from '../../store/actions/DrinksActions.js';

import PropTypes from 'prop-types';

//styles
import styles from './styles.js';




const SearchScreen = ({navigation}) => {

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const search_Drinks = (searchParameter) => dispatch(  getDrinks(searchParameter) );
  const clean_drinks = ()=> dispatch(CleanDrinks());
  const fetched_Drinks = useSelector(state => state.drinksArray.drinks);
  const fetching = useSelector(state => state.drinksArray.loading);
  const error = useSelector(state => state.drinksArray.error);

  useEffect(()=>{
    if (search){
     search_Drinks(search);   
    }
  },[search]);

  const cancel_from_Header = () => {
    clean_drinks();
    setSearch('');
  };

  const callback_data_from_Header = data =>  {
    setSearch(data);
  };

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} callback={callback_data_from_Header} cancel={cancel_from_Header}/>
      <View  style={styles.content}>
         {(() => {
            if (!search && !fetching  && !fetched_Drinks.drinks){
              return <Text style={styles.defaultText}>Type at least 3 Characters to search your favorite Cocktail</Text>;
            }
            if (!fetching && !fetched_Drinks.drinks && search) {
              return <Text style={styles.noResults}>Oops! There is no Cocktail with that name!</Text>;
            }
            if (error) {
              return <Text>Error!</Text>;
            }
            if (fetching){
              return <ActivityIndicator size="large" color="#0000ff" />;
            }
            
            if (fetched_Drinks.drinks){
              return <Lista style={styles.lista}
                drinks={fetched_Drinks.drinks}
              />;
            }

        })()}
      </View>

    </View>
  );
};



SearchScreen.propTypes = {
  getDrinks:PropTypes.func,
  Clean_Drinks:PropTypes.func,
  fetched_Drinks:PropTypes.array,
  fetching:PropTypes.bool,
  error:PropTypes.bool,
  search:PropTypes.string,

};

export default SearchScreen;
