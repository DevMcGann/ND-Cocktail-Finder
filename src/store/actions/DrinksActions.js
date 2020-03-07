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
    dispatch(get_drinks_init());
    axios
      .get(URL + `${query}`)
      .then(response => {
        const drinks = response.data;
        dispatch(get_drinks_success(drinks));
      })
      .catch(error => {
        dispatch(get_drinks_error(error.message));
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

const get_drinks_init = () => ({
  type: FETCHING_DRINKS,
  payload: true,
});

const get_drinks_success = drinks => ({
  type: FETCHING_DRINKS_SUCCESS,
  payload: drinks,
});

const get_drinks_error = () => ({
  type: FETCHING_DRINKS_ERROR,
  payload: true,
});
