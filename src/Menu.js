import React, { Component } from 'react';
import styled from 'styled-components'

const MenuWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
	border-top: 2px solid;
	border-color: ${props => props.isActive ? '#b4f6ee' : 'transparent'};
  padding: 15px 5px 5px;
  margin: 0 10px;

	.item-link {
		font-family: 'Montserrat', sans-serif;
		font-size: 14px;
		color: #fff;
		text-decoration: none;
		transition: opacity 0.2s ease;

		&:hover {
			opacity: 0.8;
		}
	}
`;

const menuItems = [
	{
		name: "Home",
		link: '/',
		active: true,
	},
	{
		name: "About us",
		link: '/',
		active: false,
	},
	{
		name: "Pricing",
		link: '/',
		active: false,
	},
		{
		name: "Delivery",
		link: '/',
		active: false,
	},
	{
		name: "Contacts",
		link: '/',
		active: false,
	},
]

class Menu extends Component {
  render() {
    return (
    	<nav>
    		<MenuWrapper>
    			{menuItems.map(item => (
    				<MenuItem key={item.name} isActive={item.active}>
    					<a className="item-link" href={item.link}>{item.name}</a>
    				</MenuItem>
    			))}
    		</MenuWrapper>
    	</nav>
    );
  }
}

export default Menu;
