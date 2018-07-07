import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './Header';
import MainInfo from './MainInfo';
import Background from './Background';

const OneScreenWrapper = styled.div`
	position: relative;
	display: flex;
	width: 100vw;
	height: 100vh;
	padding: 20px 0;
	box-sizing: border-box;
	overflow: hidden;
`;

const ContentWrapper = styled.div`
	position: relative;
	width: 1024px;
	max-width: 100%;
	padding: 0 20px;
	margin: 0 auto;
	box-sizing: border-box;
`;

class App extends Component {
  render() {
    return (
      <OneScreenWrapper>
      	<Background>
	      	<ContentWrapper>
	        	<Header />
	        	<MainInfo />
	        </ContentWrapper>
        </Background>
      </OneScreenWrapper>
    );
  }
}

export default App;
