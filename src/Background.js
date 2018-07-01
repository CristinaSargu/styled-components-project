import React, { Component } from 'react';
import styled from 'styled-components'
import slide from './img/main-image.png';

const BackgroundWrapper = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;	
	width: calc(100% + 100px);
	height: calc(100% + 100px);
	padding: 20px 0;
	background-image: url(${slide});
	background-repeat: no-repeat;
	background-size: cover;
	background-position-x: ${props => props.bgX + 'px'};
	background-position-y: ${props => props.bgY + 'px'};
	box-sizing: border-box;
`;

class Background extends Component {
	constructor(props) {
		super(props);

		this.state = {
			x: 0,
			y: 0,
			bgX: 0,
			bgY: 0,
		};

		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.animateImage = this.animateImage.bind(this);
	}

	animateImage() {
		const movementStrength = 25;
		const width = movementStrength / window.innerWidth;
		const height = movementStrength / window.innerHeight;

		const pageX = this.state.x - window.innerWidth / 2;
		const pageY = this.state.y - window.innerHeight / 2;
		const newvalueX = width * pageX * -1 - 25;
		const newvalueY = height * pageY * -1 - 50;

		this.setState({
			bgX: newvalueX,
			bgY: newvalueY,
		});
	}

	handleMouseMove(e) {
		this.setState({
			x: e.screenX,
			y: e.screenY,
		});

		this.animateImage();
	}

  render() {
    return (
      <BackgroundWrapper onMouseMove={this.handleMouseMove} bgX={this.state.bgX} bgY={this.state.bgY}>
      	{this.props.children}
      </BackgroundWrapper>
    );
  }
}

export default Background;
