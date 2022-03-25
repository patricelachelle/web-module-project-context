import React, { useState } from 'react';
import ProductContext from './contexts/ProductContext'
import CartContext from './contexts/CartContext'
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {

	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<CartContext.Provider value={cart}>
			<ProductContext.Provider value={{ products, addItem }}>

			<Navigation/>

			<Route exact path="/">
				<Products/>
			</Route>	

			<Route path="/cart">
				<ShoppingCart/>
			</Route>

			</ProductContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;
