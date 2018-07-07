import React, { PureComponent } from 'react';
import styled from 'styled-components'

const PageDescriptionWrapper = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-size: 24px;
	color: #fff;
	margin: 0 0 20px;
`;

class PageDescription extends PureComponent {
  render() {
    return <PageDescriptionWrapper className="description">A project with a styled-components library. Just a demo.</PageDescriptionWrapper>;
  }
}

export default PageDescription;
