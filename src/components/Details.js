import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {productContext} from './ProductProvider';
import {Button} from './Button.js';

const Details = () => {
	const {detail, addToCart, openModal} = useContext(productContext);
	const {id, company, img, info, price, title, inCart} = detail;

	return (
		<div className="container py-5">

			<div className="row">
				<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
					<h1> {title} </h1>
				</div>
			</div>

			<div className="row">

				<div className="col-10 mx-auto col-md-6 my-3">
					<img src={img} alt="detail product" className="img-fluid" />
				</div>

				<div className="col-10 mx-auto col-md-6 text-capitalize my-3">
					<h2> model : {title}</h2>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
						made by : {company}
					</h4>
					<h4 className="text-blue">
						<strong> price : ${price} </strong>
					</h4>
					<p className="font-weight-bold mt-3 mb-0">
						about this product : 
					</p>
					<p className="lead text-muted">
						{info}
					</p>
					<div>
						<Link to='/'>
							<Button>Back to products</Button>
						</Link>
						<Button disabled={inCart?true:false}
							onClick={()=>{
								addToCart(id);
								openModal(id);
							}}
							cart
						>
							{ inCart? 'In Cart':'Add to Cart' }
						</Button>
					</div>
				</div>

			</div>

		</div>
	)
}

export default Details;