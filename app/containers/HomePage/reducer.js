/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  ADD_ITEM_TO_CART,
} from './constants';

export const initialState = fromJS({
  fetching: false,
  foodItems: [],
  cartItems: [],
});

function homePageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_ITEMS:
      return state.set('fetching', true);
    case FETCH_ITEMS_SUCCESS:
      return state.set('fetching', false).set('foodItems', fromJS(payload));
    case FETCH_ITEMS_FAIL:
      return state.set('fetching', false);
    case ADD_ITEM_TO_CART:
      return state.update('cartItems', arr => arr.push(payload));
    default:
      return state;
  }
}

export default homePageReducer;
