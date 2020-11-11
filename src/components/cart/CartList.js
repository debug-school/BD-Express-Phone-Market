import React from 'react';
import CartItem from './CartItem.js';

const CartList = ({cart}) => {

	return (
		<div className="container-fluid">
			{
				cart.map((item)=>{
					return ( <CartItem key={item.id} item={item} /> );
				})
			}
		</div>
	)
}

export default CartList;