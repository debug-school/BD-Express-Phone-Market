import React, {useState, useEffect} from 'react';

import {storeProducts, detailProduct} from '../data.js';

export const productContext = React.createContext();

const ProductProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [detail, setDetail] = useState(detailProduct);
	const [cart, setCart] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalProduct, setModalProduct] = useState(detailProduct);

	const [cartSubtotal, setCartSubTotal] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);
	const [cartTax, setCartTax] = useState(0);

	const setData = ()=>{
		let tempProducts = [];
		storeProducts.map((item)=>{
			const singleItem = {...item};
			tempProducts = [...tempProducts, singleItem];
		});
		setProducts([...products,...tempProducts]);
	}
	const getItem = (id)=>{
		const product = products.find(item => item.id===id);
		return product;
	}
	const addToCart = (id)=>{
		const tempProducts = [...products];
		const index = tempProducts.indexOf(getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		setProducts([...tempProducts]);
		
		setCart([...cart,product]);

		addTotal();
	}
	const handleDetail = (id)=>{
		const product = getItem(id);
		setDetail(product);
	}
	const openModal = (id)=>{
		const product = getItem(id);
		setModalProduct(product);
		setIsModalOpen(true);
	}
	const closeModal = ()=>{
		setIsModalOpen(false);
	}
	const increment = (id)=>{
		let tempCart = [...cart];
		const selectedProduct = tempCart.find( (item)=> item.id===id );
		const index = tempCart.indexOf(selectedProduct);

		const product = tempCart[index];
		product.count = product.count + 1;
		product.total = product.count * product.price;

		setCart([...tempCart]);
		addTotal();
	}
	const decrement = (id)=>{
		let tempCart = [...cart];
		const selectedProduct = tempCart.find( (item)=> item.id===id );
		const index = tempCart.indexOf(selectedProduct);
		
		const product = tempCart[index];
		product.count = product.count - 1;
		if(product.count === 0){
			removeItem(id);
		}
		else{
			product.total = product.count * product.price;
			setCart([...tempCart]);
			addTotal();
		}
	}
	const addTotal = ()=>{
		let subTotal = 0;
		cart.map((item)=> subTotal = subTotal+item.total );
		const tempTax = subTotal * 0.1;
		const tax = parseFloat(tempTax.toFixed(2));
		const total = subTotal + tax;

		setCartSubTotal(subTotal);
		setCartTax(tax);
		setCartTotal(total);
		console.log("add total running......");
	}
	const removeItem = (id)=>{
		let tempProducts = [...products];
		let tempCart = [...cart];
		tempCart = tempCart.filter((item)=> item.id !== id);
		const index = tempProducts.indexOf(getItem(id));
		let removedItem = tempProducts[index];
		removedItem.inCart = false;
		removedItem.count = 0;
		removedItem.total = 0;
		setCart([...tempCart]);
		setProducts([...tempProducts]);
		addTotal();
	}
	
	const clearCart = ()=>{
		setCart([]);
		setData();
		addTotal();
		// not working
	}
	

	useEffect(() => {
		setData();
	}, [])

	return (
		<productContext.Provider
			value={{ products,detail,isModalOpen,modalProduct,cart,
				cartSubtotal,cartTotal,cartTax,
				addToCart,handleDetail,openModal,closeModal,
				increment,decrement,removeItem,clearCart
			}}>

			{props.children}
		</productContext.Provider>
	)
}

export default ProductProvider;
