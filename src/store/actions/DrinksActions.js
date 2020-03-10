import axios from 'axios';
import {URL} from '../../config/Contants.js';
import {
  FETCHING_DRINKS,
  FETCHING_DRINKS_SUCCESS,
  FETCHING_DRINKS_ERROR,
  CLEAN_DRINKS,
} from './types.js';

export function getDrinks(query) {
  return async dispatch => {
    dispatch(getDrinksInit());
    axios
      .get(`${URL}${query}`)
      .then(response => {
        const drinks = response.data;
        dispatch(getDrinksSuccess(drinks));
      })
      .catch(error => {
        dispatch(getDrinksError());
      });
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
