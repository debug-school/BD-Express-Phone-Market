import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {productContext} from './ProductProvider.js';
import {Button} from './Button.js';

const Modal = () => {
	const {isModalOpen, closeModal, modalProduct} = useContext(productContext);
	const {img, title, price} = modalProduct;
	return (
		<React.Fragment>
			{
				isModalOpen ? 
					(<ModalContainer>
						<div className="container">
							<div className="row">
								<div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
									<h5>Item added to the cart</h5>
									<img src={img} className="img-fluid" alt="Product"/>
									<h5> {title} </h5>
									<h5 className="text-muted">price : $ {price} </h5>
									<Link to='/'>
										<Button onClick={()=> closeModal()} >
											store
										</Button>
									</Link>
									<Link to='/cart'>
										<Button cart onClick={()=> closeModal()} >
											go to cart
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</ModalContainer>)
					:null

			}
		</React.Fragment>
	)
}

const ModalContainer = styled.div`
	position: fixed;
	top:0;
	bottom:0;
	right:0;
	left:0;
	background: rgba(0,0,0,0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	#modal{
		background: var(--mainWhite);
		border-radius:10px;
	}
`;

export default Modal;