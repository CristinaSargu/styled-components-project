import React, { PureComponent } from 'react';
import styled from 'styled-components'

const ButtonWrapper = styled.button`
	padding: 14px 26px;
	background-color: ${props => props.isPrimary ? '#7fdff0' : '#f1b6d3'};
	font-family: 'Montserrat', sans-serif;
	font-size: 12.5px;
	color: #fff;
	border: none;
	border-radius: 22px;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
	}
`;

class Button extends PureComponent {
  render() {
  	const {text, isPrimary} = this.props;

    return (
      <ButtonWrapper isPrimary={isPrimary}>
      	{text}
      </ButtonWrapper>
    );
  }
}

export default Button;
