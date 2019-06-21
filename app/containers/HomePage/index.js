/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import {
  SearchBarContainer,
  CartIcon,
  ItemsMainContainer,
  ItemsFilterContainer,
  ItemsFilterWrapper,
  DisplayItemsContainer,
  ItemContainer,
  ItemImageContainer,
  ItemName,
  AddButton,
  PriceTag,
  PriceContainer,
} from './elements';
import { fetchItems, addItemToCart } from './actions';
import { selectFetching, selectFoodItems, selectCartItems } from './selectors';
import CheckBox from '../../components/CheckBox';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.onFetchItems();
  }

  handleCartItems = item => {
    const { cartItems, onAddItemToCart } = this.props;
    const x = cartItems.filter(cartItem => item.id === cartItem.id);
    if (!x.length) {
      onAddItemToCart(item);
      console.log(cartItems, item);
    }
  };

  handleVegFood = e => {
    // e.preventdefault();
    console.log(e);
  };

  renderItems = () => {
    const { foodItems } = this.props;
    return foodItems.map(item => {
      const { name, cost, image, id } = item;
      /* items add to cart when they click further implementation pending  */
      return (
        <ItemContainer key={id}>
          <ItemImageContainer src={image} alt="img" />
          <ItemName>{name}</ItemName>
          <PriceContainer>
            <PriceTag>
              {cost}
              /-
            </PriceTag>
          </PriceContainer>
          <AddButton onClick={() => this.handleCartItems(item)}>
            ADD TO CART
          </AddButton>
        </ItemContainer>
      );
    });
  };

  render() {
    const { fetching } = this.props;
    return (
      <div>
        <Helmet>
          <title>FreshFood</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>
        <Header />
        <SearchBarContainer>
          <SearchBar width={90} placeholder="Search your items here ..." />
          {/* not implemented just design */}
          <CartIcon />
        </SearchBarContainer>
        <ItemsMainContainer>
          <ItemsFilterContainer>
            <ItemsFilterWrapper onSubmit={() => this.handleVegFood()}>
              <h2>Filters</h2>
              <CheckBox label="Veg Food" name="VegFood" />
              <CheckBox label="Non Veg" name="NonVeg" />
              <CheckBox label="Location" name="location" />
              {/* filter button here and by checking is mobile or not and add design to mobile view */}
            </ItemsFilterWrapper>
          </ItemsFilterContainer>
          <DisplayItemsContainer>
            {!fetching ? (
              <React.Fragment>{this.renderItems()}</React.Fragment>
            ) : (
              <h1>loading ...</h1>
            )}
          </DisplayItemsContainer>
        </ItemsMainContainer>
      </div>
    );
  }
}

HomePage.propTypes = {
  foodItems: PropTypes.array,
  fetching: PropTypes.bool,
  onFetchItems: PropTypes.func,
  cartItems: PropTypes.array,
  onAddItemToCart: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  fetching: selectFetching(),
  foodItems: selectFoodItems(),
  cartItems: selectCartItems(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetchItems: () => dispatch(fetchItems()),
    onAddItemToCart: item => dispatch(addItemToCart(item)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
