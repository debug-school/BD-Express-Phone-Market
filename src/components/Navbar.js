import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Button} from './Button.js';

import Logo from '../logo.svg';

const Navbar = () => {
	return (
		<Nav>
			<div className="navbar navbar-expand-sm navbar-dark px-sm-5">
				<Link to='/'>
					<img src={Logo} alt="logo image" className="navbar-brand" />
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to='/' className="nav-link">
							Products
						</Link>
					</li>
				</ul>
				<Link to='cart' className="ml-auto">
					<Button>
						<i className="fas fa-cart-plus mr-2"></i>
						my cart
					</Button>
				</Link>
			</div>
		</Nav>
	)
}


const Nav = styled.nav`
	background: var(--mainBlue);
	.nav-link{
		color: var(--mainWhite);
		font-size: 1.3rem !important;
		text-transform: capitalize;
	}
`

export default Navbar;