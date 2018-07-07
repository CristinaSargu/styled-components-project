import React, { PureComponent } from 'react';
import styled from 'styled-components'
import Button from './Button';
import PageTitle from './PageTitle';
import PageDescription from './PageDescription';

const MainInfoWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 20px;
	transform: translateY(-50%);
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
      	<PageTitle>Styled Components</PageTitle>
      	<PageDescription>A project with a styled-components library. Just a demo.</PageDescription>
      	<ButtonGroup>
      		<Button text="Purchase" isPrimary={true} />
      		<Button text="More info"/>
      	</ButtonGroup>
      </MainInfoWrapper>
    );
  }
}

export default MainInfo;
