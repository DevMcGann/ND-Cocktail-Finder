import {
  FETCHING_DRINKS,
  FETCHING_DRINKS_SUCCESS,
  FETCHING_DRINKS_ERROR,
  CLEAN_DRINKS,
} from '../actions/types.js';

const initialState = {
  drinks: [],
  loading: false,
  error: '',
};

const DrinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DRINKS:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHING_DRINKS_SUCCESS:
      return {
        loading: false,
        drinks: action.payload,
        error: '',
      };
    case FETCHING_DRINKS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAN_DRINKS:
      return {
        drinks: [],
        loading: false,
        error: '',
      };

    default:
      return state;
  }
};

export default DrinkReducer;
