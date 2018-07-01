import React, { PureComponent } from 'react';
import styled from 'styled-components'
import Button from './Button';

const MainInfoWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 20px;
	transform: translateY(-50%);

	.title {
		font-family: 'Montserrat', sans-serif;
		font-size: 50px;
		color: #fff;
		margin: 0;
	}

	.description {
		font-family: 'Montserrat', sans-serif;
		font-size: 24px;
		color: #fff;
		margin: 0 0 20px;
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	align-items: center;

	Button:first-child {
		margin-right: 30px;
	}
`;

class MainInfo extends PureComponent {
  render() {
    return (
      <MainInfoWrapper>
      	<h1 className="title">Styled Components</h1>
      	<p className="description">A project with a styled-components library. Just a demo.</p>
      	<ButtonGroup>
      		<Button text="Purchase" isPrimary={true} />
      		<Button text="More info"/>
      	</ButtonGroup>
      </MainInfoWrapper>
    );
  }
}

export default MainInfo;
