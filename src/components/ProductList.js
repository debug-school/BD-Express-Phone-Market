import React, {useState, useContext} from 'react';

import Product from './Product.js';
import Title from './Title.js';
import {storeProducts} from '../data.js';
import {productContext} from './ProductProvider.js';

const ProductList = () => {
	const {products} = useContext(productContext);

	return (
		<div className="container py-5">
			<Title name="our" title="products" />
			<div className="row">
				{
					products.map((product)=>{
						return <Product key={product.id} product={product} />
					})
				}
			</div>
		</div>
	)
}

export default ProductList;