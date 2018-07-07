import React, { PureComponent } from 'react';
import styled from 'styled-components'

const PageTitleWrapper = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-size: 50px;
	color: #fff;
	margin: 0;
`;

class PageTitle extends PureComponent {
  render() {
    return <PageTitleWrapper className="title">{this.props.children}</PageTitleWrapper>;
  }
}

export default PageTitle;
