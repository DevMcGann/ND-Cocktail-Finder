import axios from 'axios';
import {URL} from '../../config/Contants.js';
import {
  FETCHING_DRINKS,
  FETCHING_DRINKS_SUCCESS,
  FETCHING_DRINKS_ERROR,
  CLEAN_DRINKS,
} from './types.js';
import DrinkModel from '../../models/index.js';

export function getDrinks(query) {
  return async dispatch => {
    try {
      dispatch(getDrinksInit());
      const response = await axios.get(`${URL}${query}`);
      const data = response.data.drinks;
      const fetchedDrinks = data.map(item => {
        const drink = new DrinkModel(
          item.idDrink,
          item.strDrinkThumb,
          item.strDrink,
        );
        return drink;
      });
      dispatch(getDrinksSuccess(fetchedDrinks));
    } catch (error) {
      dispatch(getDrinksError());
    }
  };
}

export function CleanDrinks() {
  return dispatch => {
    dispatch(cleanStore());
  };
}

const cleanStore = () => ({
  type: CLEAN_DRINKS,
});

const getDrinksInit = () => ({
  type: FETCHING_DRINKS,
});

const getDrinksSuccess = drinks => ({
  type: FETCHING_DRINKS_SUCCESS,
  payload: drinks,
});

const getDrinksError = () => ({
  type: FETCHING_DRINKS_ERROR,
  payload: 'Error! Try again Later!',
});
