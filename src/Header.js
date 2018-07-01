import React, { PureComponent } from 'react';
import styled from 'styled-components'
import Logo from './Logo';
import Menu from './Menu';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
      	<Logo />
      	<Menu />
      </HeaderWrapper>
    );
  }
}

export default Header;
