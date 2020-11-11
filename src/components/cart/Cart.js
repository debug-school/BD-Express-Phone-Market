import React, {useContext} from 'react';
import Title from '../Title.js';
import CartColumn from './CartColumn.js';
import EmptyCart from './EmptyCart.js';
import {productContext} from '../ProductProvider.js';
import CartList from './CartList';
import CartTotal from './CartTotal';

const Cart = () => {
	const {cart} = useContext(productContext);
	return (
		<section>
			{
				cart.length>0?(
						<React.Fragment>
							<Title name="your" title="cart" />
							<CartColumn />
							<CartList cart={cart} />
							<CartTotal />
						</React.Fragment>
					):(
						<EmptyCart />
					)
			}
			
		</section>
	)
}

export default Cart;