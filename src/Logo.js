import React, { Component } from 'react';
import styled from 'styled-components'

const LogoLink = styled.a`
	width: 50px;

	.logo-img {
		max-width: 100%;
	}
`;

class Logo extends Component {
  render() {
    return (
      <LogoLink href="/">
      	<img src="./img/logo.png" className="logo-img" alt="Logo" />
      </LogoLink>
    );
  }
}

export default Logo;
