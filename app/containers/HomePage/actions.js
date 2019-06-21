/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchItems() {
  return {
    type: FETCH_ITEMS,
  };
}

export function fetchItemsSuccess(data) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: data,
  };
}

export function fetchItemsFail() {
  return {
    type: FETCH_ITEMS_FAIL,
  };
}

export function addItemToCart(item) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item,
  };
}

export function addItemToCartSuccess() {
  return {
    type: ADD_ITEM_TO_CART_SUCCESS,
  };
}

export function addItemToCartFail() {
  return {
    type: ADD_ITEM_TO_CART_FAIL,
  };
}
