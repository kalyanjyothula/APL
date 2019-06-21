import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import axios from 'axios';

import {
  fetchItemsSuccess,
  fetchItemsFail,
  addItemToCartSuccess,
  addItemToCartFail,
} from './actions';
import { FETCH_ITEMS, ADD_ITEM_TO_CART } from './constants';
import { selectCartItems } from './selectors';

export function* fetchItems() {
  try {
    const url = 'http://demo8058004.mockable.io/food';
    const {
      data: { food },
    } = yield call(axios, { method: 'get', url });
    yield put(fetchItemsSuccess(food));
  } catch (err) {
    yield put(fetchItemsFail());
    console.log(err);
  }
}

export function* addItemToCart(item) {
  const cartItems = yield select(selectCartItems());
  try {
    const url = 'http://demo8058004.mockable.io/cart';
    const {
      data: { success },
    } = yield call(axios, { method: 'post', data: cartItems, url });
    console.log(success, 's');
    if (success) yield put(addItemToCartSuccess());
  } catch (err) {
    yield put(addItemToCartFail());
    console.log(err);
  }
}

// Individual exports for testing
export default function* homePageSaga() {
  yield all([
    takeLatest(FETCH_ITEMS, fetchItems),
    takeLatest(ADD_ITEM_TO_CART, addItemToCart),
  ]);
}
