import React from 'react';
import styled from 'styled-components';

import Title from './Title';

const Header = ({ children }) => (
  <header>
    <Title>{children}</Title>
  </header>
);

export default Header;
