import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { fromJS } from 'immutable';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.get('homePage', initialState);

/**
 * Other specific selectors
 */
const selectFetching = () =>
  createSelector(selectHomePageDomain, substate => substate.get('fetching'));

const selectFoodItems = () =>
  createSelector(selectHomePageDomain, substate =>
    substate.get('foodItems').toJS(),
  );

const selectCartItems = () =>
  createSelector(selectHomePageDomain, substate =>
    substate.get('cartItems').toJS(),
  );
/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, substate => substate.toJS());

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  selectFetching,
  selectFoodItems,
  selectCartItems,
};
