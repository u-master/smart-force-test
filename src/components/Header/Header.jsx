import React from 'react';

import Title from './Title';

const Header = ({ children }) => (
  <header>
    <Title>{children}</Title>
  </header>
);

export default Header;
