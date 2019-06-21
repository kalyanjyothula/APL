/**
 *
 * SearchBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarWrapper,
  SearchBarInput,
  SearchBarIconWrapper,
} from './elements';

function SearchBar(props) {
  const { width, placeholder, ...restProps } = props;
  return (
    <SearchBarWrapper width={width}>
      <SearchBarInput placeholder={placeholder} {...restProps} />
      <SearchBarIconWrapper />
    </SearchBarWrapper>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default SearchBar;
