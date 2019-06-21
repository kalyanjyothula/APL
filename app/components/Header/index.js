/**
 *
 * Header
 *
 */
import React from 'react';
import { HeaderContainer, Title, SubTitle } from './elements';
// import PropTypes from 'prop-types';

function Header() {
  return (
    <HeaderContainer>
      <Title>
        <span style={{ color: '#4D32FC' }}>F</span>
        resh
        <span style={{ color: '#5AEFAF' }}>F</span>
        ood
      </Title>
      <SubTitle>
        Delicious Desserts At Your Doorstep Delivered Lightning Fast. Order Now
        ...
      </SubTitle>
    </HeaderContainer>
  );
}

Header.propTypes = {};

export default Header;
